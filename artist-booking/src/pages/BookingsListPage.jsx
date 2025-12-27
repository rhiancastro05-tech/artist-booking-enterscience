import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, DollarSign, Trash2 } from "lucide-react";
import { getBookings, clearBookings } from "../utils/storage";
import "../styles/BookingsListPage.css";

/**
 * BookingsListPage Component
 * Displays list of all user bookings
 */
function BookingsListPage() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  // Load bookings on mount
  useEffect(() => {
    const loadBookings = () => {
      const savedBookings = getBookings();
      setBookings(savedBookings);
    };

    loadBookings();
  }, []);

  // Format date for display in Portuguese
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  };

  // Format currency in Brazilian Real
  const formatCurrency = (amount) => {
    if (!amount) return "Não especificado";
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(amount);
  };

  // Handle clear all bookings
  const handleClearAll = () => {
    if (
      window.confirm("Tem certeza de que deseja excluir todas as reservas?")
    ) {
      clearBookings();
      setBookings([]);
    }
  };

  return (
    <div className="bookings-list-page">
      <div className="bookings-container">
        {/* Header */}
        <div className="bookings-header">
          <button className="back-button" onClick={() => navigate("/")}>
            <ArrowLeft size={20} />
            início
          </button>

          <h1 className="page-title">Minhas reservas</h1>

          {bookings.length > 0 && (
            <button className="clear-all-button" onClick={handleClearAll}>
              <Trash2 size={18} />
              Limpar tudo
            </button>
          )}
        </div>

        {/* Bookings List */}
        {bookings.length === 0 ? (
          <div className="empty-state">
            <Calendar size={64} />
            <h2>Ainda não há reservas</h2>
            <p>Comece pesquisando artistas e fazendo sua primeira reserva!</p>
            <button className="primary-button" onClick={() => navigate("/")}>
              Pesquisar Artistas
            </button>
          </div>
        ) : (
          <div className="bookings-grid">
            {bookings.map((booking) => (
              <div key={booking.id} className="booking-card">
                {/* Artist Image */}
                <div className="booking-image">
                  <img src={booking.artistImage} alt={booking.selectedArtist} />
                </div>

                {/* Booking Details */}
                <div className="booking-details">
                  <h3 className="artist-name">{booking.selectedArtist}</h3>

                  <div className="booking-info">
                    <div className="info-item">
                      <strong>Cliente:</strong> {booking.name}
                    </div>

                    <div className="info-item">
                      <Calendar size={16} />
                      {formatDate(booking.eventDate)}
                    </div>

                    <div className="info-item">
                      <MapPin size={16} />
                      {booking.address}
                    </div>

                    {booking.fee && (
                      <div className="info-item">
                        <DollarSign size={16} />
                        {formatCurrency(booking.fee)}
                      </div>
                    )}
                  </div>

                  <div className="booking-date">
                    Reservado em{" "}
                    {new Date(booking.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingsListPage;
