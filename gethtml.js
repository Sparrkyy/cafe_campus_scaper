const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4950.0 Safari/537.36')
  await page.goto('https://lepointdevente.com/tickets/cafe-campus-danse-club-discotheque-mardi-retro-26-avril-2022');
  //await page.goto('https://lepointdevente.com/tickets/cafe-campus-danse-club-discotheque-vendredi-x-large-29-avril');
  await page.waitForTimeout(1000*20)
  const html = await page.content()
  console.log(html)
  await browser.close();
})();
