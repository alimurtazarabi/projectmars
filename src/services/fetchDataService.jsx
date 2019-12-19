import { apiUrl } from "../config.json";

export function getFirms() {
  return http.get(apiUrl);
}