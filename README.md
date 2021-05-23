# MyReads Project

This is a Udacity React nanodegree Program.As an introcution for React learner, this covers basics of React.

# How to use

To get started, install necessary dependencies:

`$ npm install`
`$ npm install --g create-react-app`
`$ npm install --save props-types`
`$ npm install --save escape-string-regex sort-by`
`$ npm install --save form-serialize`
`$ npm install --react-router-dom`
`$ npm install -i --save lodash`

Then,

`$ npm start`

# Structure

```bash
├── README.md - This file.
├── SEARCH_TERMS.md 
├── package.json 
├── public
│   ├── favicon.ico
│   └── index.html 
└── src
    ├── App.css 
    ├── App.js
    |------ BookList.js
    |------ BookShelf.js
    |------ Serch.js
    |------ SerchChanger.js
    ├── App.test.js 
    ├── BooksAPI.js 
    ├── icons 
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css 
    └── index.js 
```


## Backend Server

The file [`BooksAPI.js`](src/BooksAPI.js) contains the methods need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query, maxResults)
```

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
