import { QueryParams } from "@/types/units";

export function prepareQueryParams(queries: QueryParams): string {
  return Object.entries(queries).reduce((acc, [key, value], index) => {
    const prefix = index === 0 ? "?" : "&";

    if (queries[key]) {
      acc += `${prefix}${key}=${value}`;
    }

    return acc;
  }, "");
}
