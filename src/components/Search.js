import { useState } from "react"
import {Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";


const Search = ({booksList, onChangeBookShelf}) => {

  const [query , setQuery ] = useState("");
  const [searchResultBooks , updateSearchResult] = useState([])
  const updateQuery = (query) => {
        if(query){
          setQuery(query);
          BooksAPI.search(query.trim()).then((res) => res.length > 0 ? updateSearchResult(res) : updateSearchResult([]));
        }
        else {
          setQuery("");
          updateSearchResult([])
        }
  }
  
  // Set book shelf for books that exist in home page and search result
  booksList.map((homeBook) => {
    searchResultBooks.map(book => {
      if(homeBook.id === book.id){
        book["shelf"] = homeBook["shelf"];
      }
      return book;
    
    });
    return homeBook;
  });

    return(
        <div className="search-books">
        <div className="search-books-bar">
           <Link to="/" className="close-search">
            Close
          </Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={query}
              onChange={(event) => updateQuery(event.target.value)}

            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchResultBooks.length > 0 && searchResultBooks.map((book) =>  <Book key={book.id} bookInfo={book} onChangeBookShelf={onChangeBookShelf} />)}
          </ol>
        </div>
      </div>
    )
}

export default Search;