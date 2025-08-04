"use client";
import { useRef } from "react";
import { useUnitsFilters } from "@/hooks/useUnitsFilters";
import { useQuery } from "@tanstack/react-query";
import UnitsTableFilters from "./UnitsTableFilters";
import UnitsTable from "./UnitsTable";
import Pagination from "./Pagination";
import { PAGE_SIZE } from "@/utils/constant";
import { fetchUnits } from "@/services/unitsApi";

const UnitsController = () => {
  const unitTableRef = useRef<HTMLDivElement>(null);
  const { page, search, sort, setPage, setSearch, setSort } = useUnitsFilters();

  const { data, isLoading, error } = useQuery({
    queryKey: ["units", page, search, sort],
    queryFn: () =>
      fetchUnits({
        _page: page,
        _per_page: PAGE_SIZE,
        _id: search,
        _sort: sort,
      }),
  });

  if (error) return <div>Sothng went wrong!</div>;

  return (
    <div className="flex flex-col gap-6">
      <UnitsTableFilters
        isLoading={isLoading}
        sortValue={sort}
        onSort={setSort}
        onSearch={setSearch}
        onResetPage={() => setPage(1)}
      />
      <UnitsTable
        units={data?.units}
        isLoading={isLoading}
        ref={unitTableRef}
      />
      <Pagination
        page={page}
        pageCount={data?.pageCount}
        loading={isLoading}
        onSelectPage={({ selected }) => {
          setPage(selected + 1);
          unitTableRef.current?.scrollIntoView();
        }}
      />
    </div>
  );
};

export default UnitsController;
