import { useState } from 'react';
import { Search } from 'lucide-react';
import '../styles/SearchBar.css';

/**
 * SearchBar Component - Spotify Style
 * Provides a search input with icon and handles search submissions
 * 
 * @param {Function} onSearch - Callback function when search is submitted
 * @param {string} placeholder - Placeholder text for input
 */
function SearchBar({ onSearch, placeholder = 'Qual artista você gostaria de contratar?' }) {
  const [query, setQuery] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-input-wrapper">
        <Search className="search-icon" size={20} />
        <input
          type="text"
          className="search-input"
          placeholder={placeholder}
          value={query}
          onChange={handleChange}
          aria-label="Pesquisar artistas"
        />
      </div>
      <button type="submit" className="search-button">
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;