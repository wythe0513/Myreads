import React from 'react';
import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger';


const Book = props => {
  const { book, books, changeShelf } = props;

  return (
    <li>
      <div className="book">
        <div className="book-top">
           <div className="book-cover" 
	          style={{ 
                width: 128, 
                height: 193, 
                backgroundImage: `url(${book.imageLinks.thumbnail})` 
              }}>
            </div>
            <ShelfChanger book={book} books={books} changeShelf={changeShelf}/>
          
        </div>
        <div className="book-title">{book.title}</div>
       
        <div className="book-authors" >{book.author.join(" & ")}</div>
          ))}
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
};

export default Book;