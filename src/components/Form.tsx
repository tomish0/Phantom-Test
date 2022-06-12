import React, {useState} from 'react';
import {setStateLocalStorage} from '../utils/setStateLocalStorage';

interface Props {
  links: string[];
  setLinks: React.Dispatch<React.SetStateAction<string[]>>;
}

// Form component to handle the input & submission of a new link

export default function Form(props: Props) {
  const [link, setLink] = useState<string>('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // check the link is a valid URL
    // first check that the url starts with http or https
    // then use a regex found online to check we have a domain & TLD
    // using the URL constructor as a check was not very accurate
    // a broader solution should be implemented here
    if (
      (!link.startsWith('http://') && !link.startsWith('https://')) ||
      !link.match(/[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g)
    )
      return alert('Invalid URL format');

    // complete a fetch request on the link to see if we get a 404 
    // a 404 definitely means that the URL doesn't exist
    // many other errors produced from requesting client side, most significantly CORS 
    // should send this URL exists? job to a server to complete
    await fetch(link)
      .then((res) => {
        if (res.status === 404) return alert('This url does not exist');
      })
      .catch(() => null);

    const {links, setLinks} = props;

    // check so we don't put duplicate links into the array
    if (links.find((l) => l === link)) return alert('This url is already in your list');

    setStateLocalStorage([link, ...links], 'links', setLinks);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setLink(e.target.value);

  return (
    <form id="form" onSubmit={onSubmit}>
      <label htmlFor="link">Add a new link:</label>

      <input
        type="text"
        name="link"
        id="link"
        placeholder="https://example.com"
        required
        onChange={handleChange}
        value={link}
      />

      <input type="submit" value="Submit" />
    </form>
  );
}
