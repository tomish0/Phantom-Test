import React from 'react';
import {setStateLocalStorage} from '../utils/setStateLocalStorage';

interface Props {
  setLinks: React.Dispatch<React.SetStateAction<string[]>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

// Clear all links component is a button used to delete every link

export default function ClearAllLinks(props: Props) {
  const {setLinks, setPage} = props;

  // simple clear function that deletes every link & sets the page back to 1
  const clearAll = () => {
    setStateLocalStorage([], 'links', setLinks);
    setStateLocalStorage(1, 'page', setPage);
  };

  return (
    <div id="clear-all-links">
      <button onClick={clearAll}>Clear All Links</button>
    </div>
  );
}
