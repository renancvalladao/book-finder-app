import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './App.css'

function App() {

  const [searchText, setSearchText] = useState('')

  const handleSearch = () => {
    console.log('Searching...')
  }

  return (
    <div className='app'>
      <h1 className='title'>Book Finder</h1>
      <div>
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
          <FontAwesomeIcon className='search-icon' icon={faSearch} onClick={handleSearch}/>
      </div>
    </div>
  );
}

export default App
