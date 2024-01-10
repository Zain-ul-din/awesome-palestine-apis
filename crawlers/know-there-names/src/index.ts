import { sleep, constructAPIResponse } from "@ps-apis/util";
import config from "../config.js";
import puppeteer from "puppeteer";
import { writeFileSync } from "fs";

const browser = await puppeteer.launch({
  headless: config.headless,
});

const page = await browser.newPage();
page.goto(config.target_urls["al_jazeera"], { waitUntil: "networkidle2", });

await page.waitForNetworkIdle();
await sleep(1000 * 10);
await page.waitForSelector("table");

let finalOutput: any[] = [];

while (true) {
  const res = await page.evaluate(() => {
    if (document.querySelector(".next") == null) return [];

    return Array.from(document.querySelectorAll("tr")).map((ele) => {
      return {
        name: ele.children[0].innerHTML,
        sex: ele.children[1].innerHTML,
        age: ele.children[2].innerHTML,
      };
    });
  });

  console.log(res);

  if (res.length == 0) {
    writeFileSync(config.dist, JSON.stringify(
      constructAPIResponse({source: Object.values(config.target_urls)}, 
        finalOutput.filter(ele => !isNaN(parseInt(ele.age))),
        (a,b)=> ({...a, data: b})
      )
    ));
    
    process.exit();
  }
  
  finalOutput = [...finalOutput, ...res];
  
  await page.click(".next");
  await page.waitForNetworkIdle();
}
