import React from 'react';
import { usePagesArray } from '../../../utils/pages';

const Pagination = ({ totalPage, page, changePage }) => {
  let pagesArray = usePagesArray(totalPage);
  return (
    <div className="pageConteiner">
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? 'page pageCurrent' : 'page'}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
