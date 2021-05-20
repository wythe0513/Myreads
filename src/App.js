import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import BookList from './BookList'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Link } from "react-router-dom"


class App extends React.Component {
  state = { books : [] };     
        
  componentDidMount(){
    BooksAPI.getAll().then(books =>  this.setState({books}))
  }
  
  changeShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then(response => {
      // set shelf for new or updated book
      changedBook.shelf = shelf;
      // update state with changed book
      this.setState(prevState => ({
        books: prevState.books
          // remove updated book from array
          .filter(book => book.id !== changedBook.id)
          // add updated book to array
          .concat(changedBook)
      }));
    });
  };
  
  render() {
    const {books}=this.state; 
    return (
      <Router>
        <div className="app">
          <Route exact path="/search" component={Search}/>

          <Route exact path='/' render={()=>(
            <div className="list-books">
              <div className="list-books-title">
                 <h1>MyReads</h1>
              </div>
              <BookList books={books} changeShelf={this.changeShelf} />
              <div className="open-search">
                 <Link to="/search">Search</Link>
              </div>
            </div>
          )}/>
      </div>
   </Router>   
)}   
     
 }

export default App
     

 

