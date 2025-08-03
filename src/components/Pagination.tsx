"use client";
import ReactPaginate from "react-paginate";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

interface PaginationProps {
  page: number;
  totalPages: number;
  loading: boolean;
  onSelectPage: (page: number) => void;
}

const Pagination = ({
  page,
  totalPages,
  loading,
  onSelectPage,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  const diableClasses = "disabled opacity-40";
  const disablePrevBtnStyle = page === 1 ? diableClasses : "";
  const disableNextBtnStyle = page === totalPages ? diableClasses : "";
  const btnClasses = "text-3xl cursor-pointer";

  const previous = (
    <span className={`${btnClasses} ${disablePrevBtnStyle}`}>
      <IoIosArrowBack />
    </span>
  );

  const next = (
    <span className={`${btnClasses} ${disableNextBtnStyle}`}>
      <IoIosArrowForward />
    </span>
  );

  const paginateClass = `cursor-pointer ${loading ? diableClasses : ""}`;

  return (
    <div className={paginateClass}>
      <ReactPaginate
        breakLabel="..."
        previousLabel={previous}
        previousClassName=""
        nextLabel={next}
        nextClassName=""
        previousLinkClassName="text-gray-500"
        nextLinkClassName="text-gray-500"
        pageClassName="text-gray-400 bg-gray-200 rounded-full"
        activeClassName="!bg-blue-500 text-white"
        pageLinkClassName="flex items-center justify-center w-12 h-12 transition"
        breakClassName="page-item break"
        breakLinkClassName="page-link"
        containerClassName="flex justify-center gap-3 items-center"
        pageCount={totalPages}
        forcePage={page - 1}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={({ selected }) => onSelectPage(selected + 1)}
      />
    </div>
  );
};

export default Pagination;
