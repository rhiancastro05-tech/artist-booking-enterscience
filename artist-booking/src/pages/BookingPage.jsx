import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BookingForm from '../components/BookingForm';
import { saveBooking } from '../utils/storage';
import '../styles/BookingPage.css';

/**
 * BookingPage Component
 * Page for booking a selected artist
 */
function BookingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const artist = location.state?.artist;

  // Redirect to home if no artist selected
  if (!artist) {
    navigate('/');
    return null;
  }

  // Handle form submission
  const handleSubmit = (bookingData) => {
    const success = saveBooking(bookingData);
    
    if (success) {
      // Navigate to success page
      navigate('/success');
    } else {
      alert('Error saving booking. Please try again.');
    }
  };

  // Handle cancel
  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="booking-page">
      <div className="booking-container">
        {/* Back Button */}
        <button className="back-button" onClick={handleCancel}>
          <ArrowLeft size={20} />
          Voltar à pesquisa
        </button>

        {/* Page Title */}
        <h1 className="page-title">Conclua sua reserva</h1>

        {/* Booking Form */}
        <BookingForm
          artist={artist}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
}

export default BookingPage;