import { useEffect, useContext } from 'react';
import BookCreate from './BookCreate';
import BookList from './BookList';
import BookContext from './context/books';

function App() {
  const { fetchBooks } = useContext(BookContext);
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List </h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
