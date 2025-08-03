"use client";
import { useUnitsFilters } from "@/hooks/useUnitsFilters";
import { useQuery } from "@tanstack/react-query";
import UnitsTableFilters from "./UnitsTableFilters";
import UnitsTable from "./UnitsTable";
import Pagination from "./Pagination";
import { PAGE_SIZE } from "@/utils/constant";
import { fetchUnits } from "@/services/unitsApi";

const UnitsController = () => {
  const { page, search, sort, setPage, setSearch, setSort } = useUnitsFilters();

  const { data, isLoading, error } = useQuery({
    queryKey: ["units", page, search, sort],
    queryFn: () =>
      fetchUnits({
        _page: page,
        _per_page: PAGE_SIZE,
        unit_id: search,
        _sort: sort,
      }),
  });

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>Sothng went wrong!</div>;

  return (
    <div className="flex flex-col gap-6">
      <UnitsTableFilters />
      <UnitsTable units={data!.units} isLoading={isLoading} />
      <Pagination
        page={page}
        totalPages={data!.totalPages}
        loading={isLoading}
        onSelectPage={setPage}
      />
    </div>
  );
};

export default UnitsController;
