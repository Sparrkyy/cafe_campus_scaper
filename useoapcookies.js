const fs = require('fs').promises;
const puppeteer = require('puppeteer');


(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const cookiesString = await fs.readFile('./cookies.json');
  const cookies = JSON.parse(cookiesString);
  await page.setCookie(...cookies);

  //await page.goto('https://www.instagram.com/avaexposito13/');
  await page.goto('https://www.instagram.com/openairpub/');
  await page.waitForTimeout(1000*20)
  const content = await page.content()
  console.log(content)
  await browser.close();
})();

