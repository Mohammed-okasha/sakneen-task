import { useState } from "react";

export const useUnitsFilters = () => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<string>("");

  return { page, search, sort, setPage, setSearch, setSort };
};
