import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import ShelfChanger from './ShelfChanger'
import { debounce } from 'lodash';


class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

  state = {
    query: '',
    newBooks: [],
    searchErr: false
  };

   search=debounce((query)=>{  
    if (query) {
      BooksAPI.search(query.trim(), 20).then(books => {
        books.length > 0
          ? this.setState({ newBooks: books, searchErr: false })
          : this.setState({ newBooks: [], searchErr: true });
      });

      
    } else this.setState({ newBooks: [], searchErr: false });
  },400)
 

  
  getBooks = event => {
    const query = event.target.value;
    this.setState({ query });
    this.search(query)
  }
 
  render() {
    const { query, newBooks, searchErr } = this.state;
    const { books, changeShelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.getBooks}
            />
          </div>
        </div>
  
        <div className="search-books-results">
          {newBooks.length > 0 && (
            <div>
              <h3>Search returned {newBooks.length} books </h3>
              <ol className="books-grid">
                {newBooks.map(newbook=>
                <li key={newbook.id} className="book">       
           
                 <div className="book-top">
                  <div className="book-cover" 
	                style={{ 
                    width: 128, 
                    height: 193, 
                    backgroundImage: `url(${newbook.imageLinks.thumbnail})` 
                    }}>
                  </div>
                  <ShelfChanger book={newbook} books={books} changeShelf={changeShelf}/>             
                  </div>

                  <div className="book-title">{newbook.title}</div>
                  <div className="book-authors">{newbook.authors.join(" & ")}</div>       
                </li>
                )}
             </ol>
             </div>
             )}
           
           {searchErr && (
            <h3>Search did not return any books. Please try again!</h3>
           )}
        </div>
      </div>
    );
  }
}
export default Search;