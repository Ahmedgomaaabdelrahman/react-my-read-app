import Book from "./Book";
const Shelf = ({shelfTitle, shelfBooks, onChangeBookShelf}) => {
    return (
        <div className="bookshelf">
        {shelfTitle && <h2 className="bookshelf-title">{shelfTitle}</h2>}
        <div className="bookshelf-books">
          <ol className="books-grid">
            {shelfBooks.map((book) =>  <Book key={book.id} bookInfo={book} onChangeBookShelf={onChangeBookShelf} />)}
          </ol>
        </div>
      </div>
    )
}

export default Shelf;