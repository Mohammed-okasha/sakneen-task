"use client";
import UnitsFilters from "./UnitsFilters";
import UnitsTable from "./UnitsTable";
import Pagination from "./Pagination";

const UnitsController = () => {
  return (
    <div className="flex flex-col gap-6">
      <UnitsFilters />
      <UnitsTable />
      <Pagination
        page={1}
        pagesCount={5}
        loading={false}
        onSelectPage={() => {}}
      />
    </div>
  );
};

export default UnitsController;
