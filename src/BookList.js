import BookShow from './BookShow';

function BookList({ books, onDelete, editBookById }) {
  const renderedBooks = books.map((book) => {
    return (
      <BookShow
        key={book.id}
        book={book}
        onDelete={onDelete}
        editBookById={editBookById}
      />
    );
  });
  return <div className="book-list">{renderedBooks}</div>;
}
export default BookList;
