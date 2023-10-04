import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, onDelete, editBookById }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    editBookById(id, newTitle);
  };
  const handleDelete = () => {
    onDelete(book.id);
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
