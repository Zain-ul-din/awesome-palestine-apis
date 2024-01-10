/**
 * Definition for metadata to be associated with each API.
*/
interface APIMetadata {
  /**
   * Original source of the data.
   */
  source: string | null;

  /**
   * Last updated date.
   */
  updated_at: Date;

  /**
   * Description of the API.
  */
  description?: string;
  
  /**
   * Version number of the API.
  */
  version?: string;

  /**
   * List of supported data formats (e.g., JSON, XML).
  */
  supported_formats?: string[];

  /**
   * Any custom tags or labels associated with the API.
   */
  tags?: string[];

  /**
   * URL or documentation link for the API.
  */
  documentation_url?: string;
}

export default APIMetadata;