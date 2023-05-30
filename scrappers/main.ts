import Product, { IProduct } from "@/models/product";
import { altScrapper, errors } from "./alt";
import { sendTelegramMessage } from "@/utils/telegram";
import { delay } from "@/utils/helpers";


interface IScannedProduct {
  productId: IProduct['_id'];
  price: number;
}

export const watch = async () => {
  console.time('timer')
  // get all products that are active
  const products = await Product.find({ status: 1 }).populate('owner');
  console.log(products.length)

  // initiate a promise for each product
  const scannedProducts: Promise<IScannedProduct>[] = [];
  for (const product of products) {
    const pricePromise = altScrapper(product.url, product.website);
    const scannedProductPromise = pricePromise.then(price => {
      return {
        productId: product._id,
        price: price as number
      };
    });
    scannedProducts.push(scannedProductPromise);
  }

  // wait for all promises to resolve
  const fetchedScannedProducts = await Promise.all(scannedProducts);

  // create a map of products for easy access to product data in O(1)
  const productsMap = new Map();
  for (const product of products) {
    productsMap.set(product._id, product);
  }

  // compare the prices and send a message if the price is lower than the previous price
  fetchedScannedProducts.forEach(el => {
    if (el?.price && el?.price <= productsMap.get(el.productId)?.price) {
      sendTelegramMessage('', [], {
        currentPrice: el.price,
        previousPrice: productsMap.get(el.productId)?.price as number,
        url: productsMap.get(el.productId)?.url as string
      })
    }
  })
  
  console.timeEnd('timer')
  console.log(errors)
  delay(10000).then(() => watch())
}