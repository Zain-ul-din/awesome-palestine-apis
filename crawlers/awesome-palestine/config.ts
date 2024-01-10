import { Config } from "@ps-apis/types";

const config: Config<{
  repo_url: string
}> = {
  dist: "../../data/awesome-palestine.json",
  target_urls: {
    repo_url: "https://raw.githubusercontent.com/aborazmeh/awesome-palestine/main/README.md"
  }
}

export default config;