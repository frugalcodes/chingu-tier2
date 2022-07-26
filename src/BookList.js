
import BookCard from "./BookCard";
import "./App.css"


function BookList  (props) {

    return (
        <div className="card-container">
        {
            props.books.map((book, i) => {
                 return  <BookCard 
                    key={i}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    title={book.volumeInfo.title}
                    publisher={book.volumeInfo.publisher}
                    author={book.volumeInfo.authors}
                    link={book.volumeInfo.canonicalVolumeLink}
                 />
            })

        }
        </div>
    )
}

export default BookList;