import {Link } from "react-router-dom"
import Shelf from "./Shelf";


const ListBooks = ({booksList, onChangeBookShelf}) => {
   

    const currentlyReadingBooks = booksList.filter((bk) => bk.shelf  === "currentlyReading");
    const wantToReadBooks = booksList.filter((bk) => bk.shelf  === "wantToRead")
    const readBooks = booksList.filter((bk) => bk.shelf  === "read")

    
    return(
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              { currentlyReadingBooks.length > 0 &&  <Shelf shelfTitle={"Currently Reading"} onChangeBookShelf={onChangeBookShelf} shelfBooks={currentlyReadingBooks}/> }
              { wantToReadBooks.length > 0 &&  <Shelf shelfTitle={"Want to Read"}  onChangeBookShelf={onChangeBookShelf} shelfBooks={wantToReadBooks}/> }
              { readBooks.length > 0 &&  <Shelf shelfTitle={"Read"}  onChangeBookShelf={onChangeBookShelf} shelfBooks={readBooks}/> }
             
             
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
    )
}

export default ListBooks;