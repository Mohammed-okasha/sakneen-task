interface UnitsFiltersProps {
  isLoading: boolean;
}

const UnitsTableFilters = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div>Filters by ID:</div>
        <input
          type="text"
          placeholder="ex: 7495"
          className="bg-white py-1 px-2"
        />
      </div>

      <div className="flex items-center gap-3">
        <div>Sort by:</div>
        <select name="" id="" className="bg-white w-[200px] py-1 px-2">
          <option value="1">9id</option>
          <option value="1">9id</option>
          <option value="1">9id</option>
        </select>
      </div>
    </div>
  );
};

export default UnitsTableFilters;
