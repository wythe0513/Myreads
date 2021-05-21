import React from 'react'
import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger';
import './App.css'

const BookShelf = props => {
  const { books, changeShelf } = props;
  
  
        
    return (   
     <div className="bookshelf-books">
      <ol className="books-grid">
       {this.props.books.map(book=>
        <li key={book.id} className="book">

         
           
           <div className="book-top">
             <div className="book-cover" 
	          style={{ 
                width: 128, 
                height: 193, 
                backgroundImage: 'url(" + book.imageLinks.thumbnail + ")' 
              }}>
              </div>
              <ShelfChanger book={book} books={books} changeShelf={changeShelf}/>
             
           </div>

          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        
        
         
       </li>
      )}
     </ol>
    
    </div>
   )
}


BookShelf.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
};

export default BookShelf;