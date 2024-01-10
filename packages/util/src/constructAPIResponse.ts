import { APIMetadata } from "@ps-apis/types"

function constructAPIResponse<T=any>(
  metaData: Omit<APIMetadata, "updated_at">, data: T,
  construct: (metaData: APIMetadata, data: T)=> void
) {
  return construct(
    {...metaData, updated_at: new Date() }, 
    data
  );
}

export default constructAPIResponse;
