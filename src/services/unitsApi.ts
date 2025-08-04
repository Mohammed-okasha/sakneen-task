import { prepareQueryParams } from "@/utils/helpes";
import { QueryParams } from "@/types/units";

const BASE_API_URL = "http://localhost:3005";

export const fetchUnits = async (queries: QueryParams) => {
  const formattedQueries = prepareQueryParams(queries);

  const res = await fetch(`${BASE_API_URL}/listings${formattedQueries}`);

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "");
  }

  return { units: result.data, pageCount: result.pages };
};
