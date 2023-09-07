import Book from "./Book"

export default function BookStore({books}) {
    return (
        <div>
            <h2>Books: {books.length}</h2>
            {
                books.map(book => <Book book={book}></Book>)
            }
        </div>
    )
}