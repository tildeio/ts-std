export type JSON =
    string
  | number
  | boolean
  | null
  | JSONObject
  | JSONArray
  ;

export interface JSONObject extends Dict<JSON> {}
export interface JSONArray extends Array<JSON> {}

export default JSON;
