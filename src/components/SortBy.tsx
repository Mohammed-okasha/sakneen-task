import { sortQueries } from "@/utils/constant";

interface SortByProps {
  value: string;
  onSort: (sortValue: string) => void;
  onResetPage: VoidFunction;
}

const SortBy = ({ value, onSort, onResetPage }: SortByProps) => {
  return (
    <div className="flex items-center gap-3">
      <div>Sort by:</div>
      <select
        className="bg-white w-[200px] p-2 text-sm"
        value={value}
        onChange={(e) => {
          onSort(e.target.value);
          onResetPage();
        }}
      >
        <option value="" disabled hidden>
          Select sorting option
        </option>
        {sortQueries.map((query) => (
          <option key={query.value} value={query.value}>
            {query.lable}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortBy;
