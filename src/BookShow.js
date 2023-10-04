import { useState } from 'react';
import BookEdit from './BookEdit';
import useBooksContext from './hooks/use-books-context';

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBooksContext();
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = () => {
    setShowEdit(false);
  };
  const handleDelete = () => {
    deleteBookById(book.id);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = (
      <div>
        <BookEdit onSubmit={handleSubmit} book={book} />
      </div>
    );
  }

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div>{content}</div>
      <div className="actions">
        <button onClick={handleEditClick} className="edit">
          Edit
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default BookShow;
