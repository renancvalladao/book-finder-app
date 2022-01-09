import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import BookCard from './components/BookCard'

function App() {

  const [searchText, setSearchText] = useState('')
  const [totalItems, setTotalItems] = useState(-1)
  const [books, setBooks] = useState([])

  const handleSearch = () => {
    if (searchText !== '') {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchText}&maxResults=12`)
        .then(resp => resp.json())
        .then(data => {
          setTotalItems(data.totalItems)
          setBooks(data.items)
        })
    }
  }

  return (
    <div className='app'>
      <h1 className='title'>Book Finder</h1>
      <div className='search-container'>
        <input
          className='query-input'
          type="text"
          placeholder='Search by author, book name...'
          spellCheck={false}
          autoComplete="off"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          onKeyPress={e => {
            if (e.key === 'Enter') handleSearch()
          }} />
        <FontAwesomeIcon className='search-icon' icon={faSearch} onClick={handleSearch} />
        <p className='books-found'>{totalItems >= 0 ? `${totalItems} book${totalItems > 1 ? 's' : ''} found` : ''}</p>
      </div>
      <div className='book-card-container'>
        {books?.map(book => <BookCard key={book.id} book={book}></BookCard>)}
      </div>
    </div>
  );
}

export default App
