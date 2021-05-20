import React from "react";
import PropTypes from "prop-types";

/* This component builds the book */

const Book = props => {
  const { book, books, changeShelf } = props;

  /* Checking to see if cover, title and author is present, provide alternative if not.*/
  const bookCover =
    books.imageLinks && books.imageLinks.thumbnail
      ? books.imageLinks.thumbnail
      : "BookCoverError";
  const bookTitle = books.title ? books.title : "Title Unavailable";
  const bookAuthors = books.authors
    ? Array.isArray(books.authors)
      ? books.authors.join(", ")
      : ""
    : "Author Unavailable";

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ backgroundImage:`url(${bookCover})`}}
          />
          <ShelfChanger book = {book} books = {books} changeShelf = {changeShelf} />
         </div>
         <div className="book-title">{bookTitle}</div>
         <div className="book-authors">{bookAuthors}</div>
       </div>
   </li>
  );
};

Book.propTypes = {
  books: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
};

export default Book;
