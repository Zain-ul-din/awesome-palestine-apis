/**
 * Crawler config type 
*/
interface Config {
  /**
   * output file path 
  */
  dist: string;
  
  /**
   * targeted URL's 
  */
  target_urls: Map<string, string>;

  /** 
   * Whether to run the browser in headless mode.
   * @info only if using headless crawler like puppeteer
  */
  headless?: boolean
}

export default Config;