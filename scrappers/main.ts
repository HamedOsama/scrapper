import Product, { IProduct } from "@/models/product";
import { altScrapper, errors, resetErrors } from "./alt";
import { sendTelegramMessage } from "@/utils/telegram";
import { delay } from "@/utils/helpers";


interface IScannedProduct {
  productId: IProduct['_id'];
  price: number;
}


function splitArray(array: any, size: number) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}


export const watch = async () => {
  const date = new Date();

  console.log(`This task is running every minute - ${date.getHours()}:${date.getMinutes()}`);

  console.time('timer')
  // get all products that are active
  const p = await Product.find({ status: 1 }).populate('owner');
  const products = splitArray(p, 50);


  const promises = []
  const fetchedScannedProducts: IScannedProduct[] = [];

  for (const productsArr of products) {
    for (const product of productsArr) {
      const pricePromise = altScrapper(product.url, product.website);
      const scannedProductPromise = pricePromise.then(price => {
        return {
          productId: product._id,
          price: price as number
        };
      });
      promises.push(scannedProductPromise);
      await delay(1000);
    }
    const data = await Promise.all(promises);
    fetchedScannedProducts.push(...data)
    await delay(2000)
  }

  // initiate a promise for each product
  // const scannedProducts: Promise<IScannedProduct>[] = [];
  // for (const product of products) {
  //   const pricePromise = altScrapper(product.url, product.website);
  //   const scannedProductPromise = pricePromise.then(price => {
  //     return {
  //       productId: product._id,
  //       price: price as number
  //     };
  //   });
  //   scannedProducts.push(scannedProductPromise);
  // }

  // // wait for all promises to resolve
  // const fetchedScannedProducts = await Promise.all(scannedProducts);






  // create a map of products for easy access to product data in O(1)
  const productsMap = new Map();
  for (const product of p) {
    productsMap.set(product._id, product);
  }

  // compare the prices and send a message if the price is lower than the previous price
  for(const el of fetchedScannedProducts) {
    if (el?.price && el?.price <= productsMap.get(el.productId)?.price) {
      sendTelegramMessage('', [], {
        currentPrice: el.price,
        previousPrice: productsMap.get(el.productId)?.price as number,
        url: productsMap.get(el.productId)?.url as string
      })
    }
    delay(50)
  }

  console.timeEnd('timer')


  console.log('errors', errors);
  resetErrors()
  // delay(10000).then(() => watch())
}
//25