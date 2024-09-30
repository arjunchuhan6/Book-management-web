/**
 * BookList Component
 * Book Component
 */
import BookList from './components/BookList'
import { Books } from './utils/bookdata'
import './components/style.css'
import { useState } from 'react'

function App() {

  const [searchtext, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(Books);

  function handleSearch() {

    const filterBooks = Books.filter((book) => book.title.toLowerCase().includes(searchtext.toLowerCase()));
    setFilteredBooks(filterBooks);
  }
  return (
    <>
      <div className='search'>
        <h2 >Search Book</h2>
        <div>
          <input type="text" className='search-text' onChange={(e) => setSearchText(e.target.value)} />
          <button onClick={handleSearch}>Search</button>

        </div>

      </div>
      <BookList booksData={filteredBooks} />
    </>
  )

}

export default App
