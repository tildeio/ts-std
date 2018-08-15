import { Dict } from './core';

export type JSONValue =
    string
  | number
  | boolean
  | null
  | JSONObject
  | JSONArray
  ;

/**
 * @deprecated
 */
export type JSON = JSONValue;

export interface JSONObject extends Dict<JSON> {}
export interface JSONArray extends Array<JSON> {}

export default JSONValue;
