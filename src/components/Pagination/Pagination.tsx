import css from "./Pagination.module.css";
import ReactPaginate from 'react-paginate';

interface PaginationProps {
  pages: number;
  changePage: (page: number) => void;
  currentPage: number;
}


function Pagination({ pages, changePage, currentPage }: PaginationProps) {

  return (
    <ReactPaginate
        pageCount={pages}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        onPageChange={({ selected }) => changePage(selected + 1)}
        forcePage={currentPage - 1}
        containerClassName={css.pagination}
        activeClassName={css.active}
        nextLabel="→"
        previousLabel="←"
      />
  );
}

export default Pagination;
