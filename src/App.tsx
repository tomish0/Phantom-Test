import React, {useState} from 'react';
import ClearAllLinks from './components/ClearAllLinks';
import Form from './components/Form';
import Links from './components/Links';
import Pagination from './components/Pagination';

// App component is the head of the component hierachy 
// Two state elements that the app is contingent upon 
// array of links & page number that are filled on load if they are present in local storage

export default function App() {
  const [links, setLinks] = useState<string[]>(
    localStorage.links ? JSON.parse(localStorage.links) : []
  );
  const [page, setPage] = useState(
    localStorage.page && +localStorage.page ? +localStorage.page : 1
  );

  return (
    <div id="app">
      <Form links={links} setLinks={setLinks} />

      <Links links={links} page={page} setLinks={setLinks} />

      <Pagination
        page={page}
        setPage={setPage}
        maxPage={links.length === 0 ? 1 : Math.ceil(links.length / 20)}
      />

      <ClearAllLinks setLinks={setLinks} setPage={setPage} />
    </div>
  );
}
