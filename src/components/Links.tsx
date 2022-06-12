import React from 'react';
import {setStateLocalStorage} from '../utils/setStateLocalStorage';

interface Props {
  links: string[];
  page: number;
  setLinks: React.Dispatch<React.SetStateAction<string[]>>;
}

// Links component renders out the list of saved links

export default function Links(props: Props) {
  const {links, page, setLinks} = props;

  // separate the links into the correct section of max 20 links
  let pageLinks = links.slice(page === 1 ? 0 : 20 * (page - 1), 20 * page);

  // delete an individual link & update the state
  const deleteLink = (index: number) => {    
    if (page === 1) links.splice(index, 1);
    else links.splice(index + (20 * (page - 1)), 1);

    setStateLocalStorage([...links], 'links', setLinks);
  };

  return (
    <div id="links">
      {pageLinks.map((link, index) => {
        return (
          <div key={index}>
            <span>{link}</span> <button onClick={() => deleteLink(index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
