import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import ArtistGrid from "../components/ArtistGrid";
import { searchArtists, getTrendingArtists } from "../services/spotifyService";
import { Music, Calendar } from "lucide-react";
import "../styles/HomePage.css";

/**
 * HomePage Component
 * Main page with search functionality and artist grid
 */
function HomePage() {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const navigate = useNavigate();

  // Load trending artists on mount
  useEffect(() => {
    loadTrendingArtists();
  }, []);

  // Load trending artists for initial display
  const loadTrendingArtists = async () => {
    setLoading(true);
    try {
      const trendingArtists = await getTrendingArtists();
      setArtists(trendingArtists);
    } catch (error) {
      console.error("Error loading trending artists:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle search submission
  const handleSearch = async (query) => {
    setLoading(true);
    setSearchPerformed(true);
    try {
      const results = await searchArtists(query);
      setArtists(results);
    } catch (error) {
      console.error("Error searching artists:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle artist selection
  const handleSelectArtist = (artist) => {
    // Navigate to booking page with artist data
    navigate("/booking", { state: { artist } });
  };

  return (
    <div className="home-page">
      {/* Header */}
      <header className="home-header">
        <div className="header-content">
          <div className="logo">
            <Music size={32} />
            <h1>ContrataShow</h1>
          </div>
          <button
            className="bookings-link"
            onClick={() => navigate("/bookings")}
          >
            <Calendar size={20} />
            Minhas reservas
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="home-main">
        <div className="container">
          {/* Hero Section */}
          <section className="hero-section">
            <h2 className="hero-title">Descubra e contrate artistas incríveis</h2>
            <p className="hero-subtitle">
              Procure seus artistas favoritos e contrate-os para o seu próximo evento.
            </p>

            <SearchBar onSearch={handleSearch} />
          </section>

          {/* Results Section */}
          <section className="results-section">
            <h3 className="section-title">
              {searchPerformed ? "Resultados da pesquisa" : "Artistas em alta"}
            </h3>
            <ArtistGrid
              artists={artists}
              onSelectArtist={handleSelectArtist}
              loading={loading}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
