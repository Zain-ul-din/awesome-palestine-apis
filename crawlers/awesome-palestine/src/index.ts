/*
  * Converts readme.md links to JSON format
*/

import { writeFileSync } from "fs";
import { constructAPIResponse } from "@ps-apis/util";
import parseMd from "./lib/parse-md";
import config from "../config";

const readMeContent = await (await fetch(config.target_urls.repo_url)).text()

writeFileSync(
  config.dist,
  JSON.stringify(
    constructAPIResponse(
      { source: Object.values(config.target_urls) }, 
      (await parseMd(readMeContent)), (a, data)=> {
        return {...a, data}
    })
  )
);
