import { Users, TrendingUp } from 'lucide-react';
import '../styles/ArtistCard.css';

/**
 * ArtistCard Component
 * Displays artist information in a card format
 * 
 * @param {Object} artist - Artist data object
 * @param {Function} onSelect - Callback when artist is selected
 */
function ArtistCard({ artist, onSelect }) {
  // Format followers count for display
  const formatFollowers = (count) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(0)}K`;
    }
    return count.toString();
  };

  return (
    <div className="artist-card" onClick={() => onSelect(artist)}>
      <div className="artist-image-wrapper">
        <img 
          src={artist.image} 
          alt={artist.name}
          className="artist-image"
          loading="lazy"
        />
        <div className="artist-overlay">
          <button className="select-button">
            Selecionar Artista
          </button>
        </div>
      </div>
      
      <div className="artist-info">
        <h3 className="artist-name">{artist.name}</h3>
        
        <div className="artist-genres">
          {artist.genres.slice(0, 2).map((genre, index) => (
            <span key={index} className="genre-tag">
              {genre}
            </span>
          ))}
        </div>
        
        <div className="artist-stats">
          <div className="stat">
            <Users size={16} />
            <span>{formatFollowers(artist.followers)}</span>
          </div>
          <div className="stat">
            <TrendingUp size={16} />
            <span>{artist.popularity}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistCard;