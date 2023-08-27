import { useMemo } from 'react';

export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};
export const usePagesArray = (totalPage) => {
  const pagesArray = useMemo(() => {
    let result = [];
    for (let i = 0; i < totalPage; i++) {
      result.push(i + 1);
    }
    return result;
  }, [totalPage]);
  return pagesArray;
};
