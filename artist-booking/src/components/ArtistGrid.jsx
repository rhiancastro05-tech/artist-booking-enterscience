import ArtistCard from './ArtistCard';
import '../styles/ArtistGrid.css';

/**
 * ArtistGrid Component
 * Displays a grid of artist cards with loading and empty states
 * 
 * @param {Array} artists - Array of artist objects
 * @param {Function} onSelectArtist - Callback when an artist is selected
 * @param {boolean} loading - Loading state
 */
function ArtistGrid({ artists = [], onSelectArtist, loading = false }) {
  // Loading state
  if (loading) {
    return (
      <div className="artist-grid-loading">
        <div className="spinner"></div>
        <p>Carregando artistas...</p>
      </div>
    );
  }

  // Empty state
  if (!artists || artists.length === 0) {
    return (
      <div className="artist-grid-empty">
        <p>No artists found. Try a different search!</p>
      </div>
    );
  }

  // Grid display
  return (
    <div className="artist-grid">
      {artists.map((artist) => (
        <ArtistCard
          key={artist.id}
          artist={artist}
          onSelect={onSelectArtist}
        />
      ))}
    </div>
  );
}

export default ArtistGrid;