import axios from 'axios';
import { useEffect, useState } from 'react';
import BookCreate from './BookCreate';
import BookList from './BookList';
function App() {
  const [books, setBooks] = useState([]);

  const deleteBookById = async (id) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };
  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    // updating!!!
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };
  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title: title,
    });
    const updatedBooks = [...books, response.data];

    console.log('title: ', title);
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List </h1>
      <BookList
        editBookById={editBookById}
        books={books}
        onDelete={deleteBookById}
      />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
