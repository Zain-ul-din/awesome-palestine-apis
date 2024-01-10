import { Config } from "@ps-apis/types";

const config: Config<{
  al_jazeera: string
}> = {
  dist: "../../data/martyrs.json",
  target_urls: {
    al_jazeera: "https://datawrapper.dwcdn.net/SAgXc/2/"
  },
  headless: true
}

export default config;