import corn from 'node-cron';
import 'module-alias/register';
import dotenv from 'dotenv';
import connectDatabase from './models/connect';
import { watch } from './scrappers/main';

dotenv.config();

connectDatabase();


corn.schedule('*/3 * * * *', watch, {
    name: 'Main Job',
});
// watch()


// (async () => {
//     const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

//     console.time('timer')

//     await delay(5000);

//     await Promise.all([
//         altScrapper('https://www.amazon.eg/-/en/XO-EP21-Wired-Earphones-Microphone/dp/B09DLCDZ46/ref=sr_1_8?pf_rd_i=18018102031&pf_rd_m=A1ZVRGNO5AYLOV&pf_rd_p=95b8cc7d-ce63-49fc-bd0a-c7ae7548fdb5&pf_rd_r=Y2WYQPT417JPSGJBNKAM&pf_rd_s=merchandised-search-12&pf_rd_t=101&qid=1685291620&refinements=p_4%3AXO&s=electronics&sr=1-8', 'amazon'),
//         // altScrapper('https://www.noon.com/egypt-ar/ae-super-soft-thermal-long-sleeve-shirt/ZCD9E77A4594E9707B88DZ/p/?o=zcd9e77a4594e9707b88dz-1', 'noon'),
//         // altScrapper('https://www.noon.com/egypt-ar/ae-super-soft-thermal-long-sleeve-shirt/ZCD9E77A4594E9707B88DZ/p/?o=zcd9e77a4594e9707b88dz-1', 'noon'),
//         // altScrapper('https://www.noon.com/egypt-ar/ae-super-soft-thermal-long-sleeve-shirt/ZCD9E77A4594E9707B88DZ/p/?o=zcd9e77a4594e9707b88dz-1', 'noon'),
//         // altScrapper('https://www.noon.com/egypt-ar/ae-super-soft-thermal-long-sleeve-shirt/ZCD9E77A4594E9707B88DZ/p/?o=zcd9e77a4594e9707b88dz-1', 'noon'),
//         // altScrapper('https://www.noon.com/egypt-ar/ae-super-soft-thermal-long-sleeve-shirt/ZCD9E77A4594E9707B88DZ/p/?o=zcd9e77a4594e9707b88dz-1', 'noon'),
//         // altScrapper('https://www.noon.com/egypt-ar/ae-super-soft-thermal-long-sleeve-shirt/ZCD9E77A4594E9707B88DZ/p/?o=zcd9e77a4594e9707b88dz-1', 'noon'),
//         // altScrapper('https://www.noon.com/egypt-ar/ae-super-soft-thermal-long-sleeve-shirt/ZCD9E77A4594E9707B88DZ/p/?o=zcd9e77a4594e9707b88dz-1', 'noon'),
//         // altScrapper('https://www.noon.com/egypt-ar/ae-super-soft-thermal-long-sleeve-shirt/ZCD9E77A4594E9707B88DZ/p/?o=zcd9e77a4594e9707b88dz-1', 'noon'),
//         // altScrapper('https://www.noon.com/egypt-ar/ae-super-soft-thermal-long-sleeve-shirt/ZCD9E77A4594E9707B88DZ/p/?o=zcd9e77a4594e9707b88dz-1', 'noon'),
//         // altScrapper('https://www.noon.com/egypt-ar/ae-super-soft-thermal-long-sleeve-shirt/ZCD9E77A4594E9707B88DZ/p/?o=zcd9e77a4594e9707b88dz-1', 'noon'),
//         // altScrapper('https://www.noon.com/egypt-ar/ae-super-soft-thermal-long-sleeve-shirt/ZCD9E77A4594E9707B88DZ/p/?o=zcd9e77a4594e9707b88dz-1', 'noon'),
//         // altScrapper('https://www.noon.com/egypt-ar/ae-super-soft-thermal-long-sleeve-shirt/ZCD9E77A4594E9707B88DZ/p/?o=zcd9e77a4594e9707b88dz-1', 'noon'),
//         // altScrapper('https://www.jumia.com.eg/ar/rexona-workout-roll-on-antiperspirant-for-men-50ml-24776844.html', 'jumia'),
//         // altScrapper('https://www.jumia.com.eg/ar/nivea-fresh-active-deodorant-roll-on-for-men-50ml-21150726.html', 'jumia'),
//         // altScrapper('https://www.amazon.eg/-/en/XO-EP21-Wired-Earphones-Microphone/dp/B09DLCDZ46/ref=sr_1_8?pf_rd_i=18018102031&pf_rd_m=A1ZVRGNO5AYLOV&pf_rd_p=95b8cc7d-ce63-49fc-bd0a-c7ae7548fdb5&pf_rd_r=Y2WYQPT417JPSGJBNKAM&pf_rd_s=merchandised-search-12&pf_rd_t=101&qid=1685291620&refinements=p_4%3AXO&s=electronics&sr=1-8', 'amazon'),
//         // altScrapper('https://www.noon.com/egypt-ar/ae-super-soft-thermal-long-sleeve-shirt/ZCD9E77A4594E9707B88DZ/p/?o=zcd9e77a4594e9707b88dz-1', 'noon'),
//         // altScrapper('https://www.jumia.com.eg/ar/rexona-workout-roll-on-antiperspirant-for-men-50ml-24776844.html', 'jumia'),
//         // altScrapper('https://www.jumia.com.eg/ar/nivea-fresh-active-deodorant-roll-on-for-men-50ml-21150726.html', 'jumia'),
//         // altScrapper('https://www.amazon.eg/-/en/XO-EP21-Wired-Earphones-Microphone/dp/B09DLCDZ46/ref=sr_1_8?pf_rd_i=18018102031&pf_rd_m=A1ZVRGNO5AYLOV&pf_rd_p=95b8cc7d-ce63-49fc-bd0a-c7ae7548fdb5&pf_rd_r=Y2WYQPT417JPSGJBNKAM&pf_rd_s=merchandised-search-12&pf_rd_t=101&qid=1685291620&refinements=p_4%3AXO&s=electronics&sr=1-8', 'amazon'),
//         // altScrapper('https://www.noon.com/egypt-ar/ae-super-soft-thermal-long-sleeve-shirt/ZCD9E77A4594E9707B88DZ/p/?o=zcd9e77a4594e9707b88dz-1', 'noon'),
//         // altScrapper('https://www.jumia.com.eg/ar/rexona-workout-roll-on-antiperspirant-for-men-50ml-24776844.html', 'jumia'),
//         // altScrapper('https://www.jumia.com.eg/ar/nivea-fresh-active-deodorant-roll-on-for-men-50ml-21150726.html', 'jumia'),
//         // altScrapper('https://www.amazon.eg/-/en/XO-EP21-Wired-Earphones-Microphone/dp/B09DLCDZ46/ref=sr_1_8?pf_rd_i=18018102031&pf_rd_m=A1ZVRGNO5AYLOV&pf_rd_p=95b8cc7d-ce63-49fc-bd0a-c7ae7548fdb5&pf_rd_r=Y2WYQPT417JPSGJBNKAM&pf_rd_s=merchandised-search-12&pf_rd_t=101&qid=1685291620&refinements=p_4%3AXO&s=electronics&sr=1-8', 'amazon'),
//         // altScrapper('https://www.noon.com/egypt-ar/ae-super-soft-thermal-long-sleeve-shirt/ZCD9E77A4594E9707B88DZ/p/?o=zcd9e77a4594e9707b88dz-1', 'noon'),
//         // altScrapper('https://www.jumia.com.eg/ar/rexona-workout-roll-on-antiperspirant-for-men-50ml-24776844.html', 'jumia'),
//         // altScrapper('https://www.jumia.com.eg/ar/nivea-fresh-active-deodorant-roll-on-for-men-50ml-21150726.html', 'jumia'),
//         // altScrapper('https://www.amazon.eg/-/en/XO-EP21-Wired-Earphones-Microphone/dp/B09DLCDZ46/ref=sr_1_8?pf_rd_i=18018102031&pf_rd_m=A1ZVRGNO5AYLOV&pf_rd_p=95b8cc7d-ce63-49fc-bd0a-c7ae7548fdb5&pf_rd_r=Y2WYQPT417JPSGJBNKAM&pf_rd_s=merchandised-search-12&pf_rd_t=101&qid=1685291620&refinements=p_4%3AXO&s=electronics&sr=1-8', 'amazon'),
//         // altScrapper('https://www.noon.com/egypt-ar/ae-super-soft-thermal-long-sleeve-shirt/ZCD9E77A4594E9707B88DZ/p/?o=zcd9e77a4594e9707b88dz-1', 'noon'),
//         // altScrapper('https://www.jumia.com.eg/ar/rexona-workout-roll-on-antiperspirant-for-men-50ml-24776844.html', 'jumia'),
//         // altScrapper('https://www.jumia.com.eg/ar/nivea-fresh-active-deodorant-roll-on-for-men-50ml-21150726.html', 'jumia'),
//         // altScrapper('https://www.amazon.eg/-/en/XO-EP21-Wired-Earphones-Microphone/dp/B09DLCDZ46/ref=sr_1_8?pf_rd_i=18018102031&pf_rd_m=A1ZVRGNO5AYLOV&pf_rd_p=95b8cc7d-ce63-49fc-bd0a-c7ae7548fdb5&pf_rd_r=Y2WYQPT417JPSGJBNKAM&pf_rd_s=merchandised-search-12&pf_rd_t=101&qid=1685291620&refinements=p_4%3AXO&s=electronics&sr=1-8', 'amazon'),
//         // altScrapper('https://www.noon.com/egypt-ar/ae-super-soft-thermal-long-sleeve-shirt/ZCD9E77A4594E9707B88DZ/p/?o=zcd9e77a4594e9707b88dz-1', 'noon'),
//         // altScrapper('https://elsindbadstore.com/en/hood-wall-mounted-60-cm-cwb-6441-xn.html', 'hatly'),
//     ])
//     console.timeEnd('timer')
//     console.log(errors)
// })();


