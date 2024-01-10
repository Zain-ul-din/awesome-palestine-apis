/**
 * Crawler config type 
*/
interface Config<T extends Record<string, string>> {
  /**
   * output file path 
  */
  dist: string;
  
  /**
   * targeted URL's 
  */
  target_urls: T
  
  /** 
   * Whether to run the browser in headless mode.
   * @info only if using headless crawler like puppeteer
  */
  headless?: boolean
}

export default Config;