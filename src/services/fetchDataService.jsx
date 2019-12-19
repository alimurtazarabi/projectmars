import { apiUrl } from "../config.json";

// for some reasons json-server didn't run with me so i just made a fake api service in adjecent file.
export function getFirms() {
  return http.get(apiUrl);
}