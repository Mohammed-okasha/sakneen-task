"use client";
import ReactPaginate from "react-paginate";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

interface PaginationProps {
  page: number;
  pagesCount: number;
  loading: boolean;
  onSelectPage: (page: number) => void;
}

const Pagination = ({
  page,
  pagesCount,
  loading,
  onSelectPage,
}: PaginationProps) => {
  if (!(pagesCount > 1 && pagesCount >= page)) return null;

  const btnClasses = "text-3xl cursor-pointer";

  const previous = (
    <span className={btnClasses}>
      <IoIosArrowBack />
    </span>
  );

  const next = (
    <span className={btnClasses}>
      <IoIosArrowForward />
    </span>
  );

  const paginateClass = `cursor-pointer ${loading ? "disabled" : ""}`;

  return (
    <div className={paginateClass}>
      <ReactPaginate
        breakLabel="..."
        previousLabel={previous}
        previousClassName="mr-3"
        nextLabel={next}
        nextClassName="ml-3"
        previousLinkClassName="text-gray-500"
        nextLinkClassName="text-gray-500"
        pageClassName="text-gray-400 bg-gray-200 flex items-center justify-center w-10 h-10 rounded-full transition"
        activeClassName="bg-blue-500 text-white"
        // pageLinkClassName=""
        breakClassName="page-item break"
        breakLinkClassName="page-link"
        containerClassName="flex justify-center gap-3 items-center"
        pageCount={pagesCount}
        forcePage={page - 1}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={({ selected }) => onSelectPage(selected + 1)}
        // renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
