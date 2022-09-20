import "./App.css";
import { useState, useEffect } from "react";
import ListBooks from "./components/ListBooks";
import { Route , Routes, useNavigate } from "react-router-dom"
import Search from "./components/Search";
import * as BooksAPI from "./BooksAPI";

function App() {
  let navigate = useNavigate();
  useEffect(() => {
    getAllBooks();
  },[]);


  const getAllBooks = async () =>{ 
    const allBooks = await BooksAPI.getAll();
    updateBooks(allBooks);
  }
  const [booksList, updateBooks] = useState([]);

  const changeShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    getAllBooks();
    navigate('/')
  }
  return (
    <Routes>
      <Route exact path="/" element={
        <ListBooks onChangeBookShelf={changeShelf} booksList={booksList}/>
      }
      />

      <Route exact path="/search" element={
        <Search onChangeBookShelf={changeShelf} booksList={booksList}/>
      }
      />
    </Routes>
  );
}

export default App;
