import { test, expect, chromium, firefox } from '@playwright/test';

test.only('test to launch browser', async () => {
  const edgebrowser = await chromium.launch();
  const edgecontext = await edgebrowser.newContext();
  const edgepage = await edgecontext.newPage();
  await edgepage.goto("https://www.redbus.in ")
  const edgeTitle = await edgepage.title();
  console.log(edgeTitle);

  const pageurlredbus = edgepage.url();
  console.log(pageurlredbus);


  const browser = await firefox.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.flipkart.in ")
  const Title = await page.title();
  console.log(Title);

  const pageurlflipkart = page.url();
  console.log(pageurlflipkart);

});

// test.only('test to launch firefoxbrowser', async () => {
//   const browser = await firefox.launch();
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   await page.goto("https://www.flipkart.in ")
//   const Title = await page.title();
//   console.log(Title);
//   expect(Title).toBeTruthy();
// });

