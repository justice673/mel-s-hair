"use client";

import ReactPaginate from "react-paginate";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";

type PaginationProps = {
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  pageCount,
  currentPage,
  onPageChange,
}: PaginationProps) {
  if (pageCount <= 1) return null;

  return (
    <ReactPaginate
      pageCount={pageCount}
      forcePage={currentPage}
      onPageChange={({ selected }) => onPageChange(selected)}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      breakLabel="…"
      previousLabel={<PiCaretLeftLight size={18} />}
      nextLabel={<PiCaretRightLight size={18} />}
      containerClassName="mels-pagination"
      pageClassName="mels-pagination__item"
      pageLinkClassName="mels-pagination__link"
      activeClassName="mels-pagination__item--active"
      activeLinkClassName="mels-pagination__link--active"
      previousClassName="mels-pagination__item mels-pagination__item--nav"
      nextClassName="mels-pagination__item mels-pagination__item--nav"
      previousLinkClassName="mels-pagination__link"
      nextLinkClassName="mels-pagination__link"
      breakClassName="mels-pagination__item"
      breakLinkClassName="mels-pagination__link"
      disabledClassName="mels-pagination__item--disabled"
      disabledLinkClassName="mels-pagination__link--disabled"
      renderOnZeroPageCount={null}
    />
  );
}
