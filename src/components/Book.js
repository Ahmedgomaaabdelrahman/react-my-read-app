const Book = ({bookInfo , onChangeBookShelf}) => {
    
    return (
        <li key={bookInfo.id}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage:
                        `url(${bookInfo.hasOwnProperty("imageLinks") ? bookInfo.imageLinks["thumbnail"]: ''})`,
                    }}
                  ></div>
                  <div className="book-shelf-changer">
                    <select defaultValue={bookInfo.shelf ?? "none"} onChange={ (event) => onChangeBookShelf(bookInfo,event.target.value)}>
                      <option value="" disabled>
                        Move to...
                      </option>
                      <option value="currentlyReading">
                        Currently Reading
                      </option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{bookInfo.title}</div>
                <div className="book-authors">{Array.isArray(bookInfo.authors) ? bookInfo.authors.join(", ") : ''}</div>
              </div>
            </li>
    )
}

export default Book;