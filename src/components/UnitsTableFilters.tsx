import { useDebounce } from "@/hooks/useDebounce";
import SortBy from "./SortBy";

interface UnitsFiltersProps {
  isLoading: boolean;
  sortValue: string;
  onSort: (sortValue: string) => void;
  onSearch: (value: string) => void;
  onResetPage: VoidFunction;
}

const UnitsTableFilters = (props: UnitsFiltersProps) => {
  const { isLoading, sortValue, onSort, onSearch, onResetPage } = props;
  const searchHandler = useDebounce({
    deleay: 300,
    callback: (value) => onSearch(value),
  });

  return (
    <div
      className={`flex flex-col justify-between gap-3 items-center md:flex-row ${
        isLoading ? "disabled opacity-40" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        <div>Filters by ID:</div>
        <input
          type="text"
          placeholder="ex: A-36"
          className="bg-white py-1 px-2"
          onChange={searchHandler}
        />
      </div>

      <SortBy value={sortValue} onSort={onSort} onResetPage={onResetPage} />
    </div>
  );
};

export default UnitsTableFilters;
