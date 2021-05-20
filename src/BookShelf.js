import React from 'react'
import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger';
import './App.css'

const Book = props => {
  const { book, books, changeShelf } = props;
  const title = book.title
   
        
    return (   
       <li>
         <div className="book">
           <div className="book-top">
             <div 
              className="book-cover" 
	          style={{ 
               width: 128, 
               height: 193, 
               backgroundImage: 'url(" + book.imageLinks.thumbnail + ")' 
              }}
             />
             <ShelfChanger book={book} books={books} changeShelf={changeShelf} />
            </div>
            <div className="book-title">
             {title}
            </div>
            <div className="book-authors">{book.authors && 
              <div className="book=authors">
                {book.authors[0]}
              </div>
             }
            </div> 
         </div>
        </li>
       )}  



Book.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
};

export default Book;