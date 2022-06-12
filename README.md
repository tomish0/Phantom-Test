React v^18.1.0
Typescript v^4.7.3

Application works as follows:

1. The user types out a string into the input.
2. After the string is submitted via a HTML form the app will check if it is a valid URL.
3. If it is a valid URL it is added to a list of links. 
4. This list is rendered out onto the screen.
5. Each link can be deleted individually or all links can be deleted at once.
6. Pagination included to navigate through all the links, 20 results per page.
7. State is stored in local storage.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\

