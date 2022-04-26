const puppeteer = require('puppeteer');


(async () => {
  const browser = await puppeteer.launch({ headless: false });
  eadlfasjdflkajsdflkjasdflksdj
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/openairpub/');
  await page.waitForTimeout(1000*40)
  const content = await page.content()
  const cookies = await page.cookies()
  console.log(JSON.stringify(cookies))
  await browser.close();
})();


