import React from 'react';
import {setStateLocalStorage} from '../utils/setStateLocalStorage';

interface Props {
  page: number;
  maxPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

// Pagination component to add navigation between the lists of 20 links
// Note: haven't added code to limit the max number of page options in the pagination list 

export default function Pagination(props: Props) {
  const {page, setPage, maxPage} = props;

  // get all the possible page numbers for the number of links you have  
  let allPages = Array.from({length: maxPage}).map((e, i) => i + 1);

  // handle clicking on the arrows to go or down in the page numbers
  const slide = (upDown: 'up' | 'down') =>
    setStateLocalStorage(upDown === 'up' ? page + 1 : page - 1, 'page', setPage);

  // handle clicking on a specify page number
  const selectPage = (p: number) => {
    if (p !== page) setStateLocalStorage(p, 'page', setPage);
  };

  return (
    <div id="pagination">
      {page > 1 && <span onClick={() => slide('down')}>{'<'}</span>}

      {allPages.map((p, index) => {
        return (
          <span
            key={index}
            className={page === p ? 'page-selected' : ''}
            onClick={() => selectPage(p)}
          >
            {p}
          </span>
        );
      })}

      {page !== maxPage && <span onClick={() => slide('up')}>{'>'}</span>}
    </div>
  );
}
