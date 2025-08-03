import { prepareQueryParams } from "@/utils/helpes";
import { Unit, QueryParams } from "@/types/units";

const BASE_API_URL = "http://localhost:3005";

interface UnitsResult {
  units: Unit[];
  total: number;
  totalPages: number;
}

export const fetchUnits = async (
  queries: QueryParams
): Promise<UnitsResult> => {
  const formattedQueries = prepareQueryParams(queries);

  const res = await fetch(`${BASE_API_URL}/listings${formattedQueries}`);

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "");
  }

  return { units: result.data, total: result.items, totalPages: result.pages };
};
