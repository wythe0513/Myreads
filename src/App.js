import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import BookList from './BookList'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Link } from "react-router-dom"


class App extends React.Component {
  state = { books : [] };     
        
  componentDidMount(){
    BooksAPI.getAll().then(books =>  this.setState({books}))
  }
  
  changeShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then(response => {
      changedBook.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books
       .filter(book => book.id !== changedBook.id)
       .concat(changedBook)
      }));
    });
  };
  
  render() {
    const {books}=this.state; 
    return (
       <div className="app">
        <Router>
        <Switch>
          <Route exact path="/search" render={() => (
              <Search books={books} changeShelf={this.changeShelf} />
            )}
          />

          <Route exact path='/' render={() => (
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
       </Switch>
      </Router>
     </div>
   
)}   
     
 }

export default App
     

 

