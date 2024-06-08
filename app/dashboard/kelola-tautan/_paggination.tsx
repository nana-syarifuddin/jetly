import React from 'react';

interface PaginationProps {
  meta: {
    totalLinks: number;
    currentPage: number;
    totalPages: number;
  };
  onPageChange: (page: number) => void;
}

const Pagination = ({ meta, onPageChange }: PaginationProps) => {
  const { currentPage, totalPages } = meta;

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    let pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button key={i} onClick={() => handlePageChange(i)} disabled={i === currentPage} className={`${i === currentPage ? 'underline' : ''}`}>
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex gap-4">
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className={`${currentPage === 1 ? 'text-slate-400' : ''}`}>
        Previous
      </button>
      {renderPageNumbers()}
      <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className={`${currentPage === totalPages ? 'text-slate-400' : ''}`}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
