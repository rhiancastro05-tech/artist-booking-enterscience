import { useState } from 'react';
import { Calendar, DollarSign, MapPin, User } from 'lucide-react';
import '../styles/BookingForm.css';

/**
 * BookingForm Component
 * Form for collecting booking information for an artist
 * 
 * @param {Object} artist - Selected artist object
 * @param {Function} onSubmit - Callback when form is submitted
 * @param {Function} onCancel - Callback when form is cancelled
 */
function BookingForm({ artist, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    selectedArtist: artist.name,
    fee: '',
    eventDate: '',
    address: ''
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.eventDate) {
      newErrors.eventDate = 'Event date is required';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit({
        ...formData,
        artistId: artist.id,
        artistImage: artist.image
      });
    }
  };

  return (
    <div className="booking-form-container">
      <div className="booking-form-header">
        <img 
          src={artist.image} 
          alt={artist.name}
          className="artist-preview-image"
        />
        <div>
          <h2>Book {artist.name}</h2>
          <p className="artist-genres-preview">
            {artist.genres.join(' • ')}
          </p>
        </div>
      </div>

      <form className="booking-form" onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">
            <User size={18} />
            Seu nome *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
            placeholder="Digite seu nome completo"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        {/* Selected Artist (Read-only) */}
        <div className="form-group">
          <label htmlFor="selectedArtist">
            <User size={18} />
            Artista Selecionado *
          </label>
          <input
            type="text"
            id="selectedArtist"
            name="selectedArtist"
            value={formData.selectedArtist}
            readOnly
            className="readonly"
          />
        </div>

        {/* Fee Field */}
        <div className="form-group">
          <label htmlFor="fee">
            <DollarSign size={18} />
            Cachê do artista
          </label>
          <input
            type="number"
            id="fee"
            name="fee"
            value={formData.fee}
            onChange={handleChange}
            placeholder="Insira o cachê (opcional)"
            min="0"
            step="0.01"
          />
        </div>

        {/* Event Date Field */}
        <div className="form-group">
          <label htmlFor="eventDate">
            <Calendar size={18} />
            Data do Evento *
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className={errors.eventDate ? 'error' : ''}
            min={new Date().toISOString().split('T')[0]}
          />
          {errors.eventDate && <span className="error-message">{errors.eventDate}</span>}
        </div>

        {/* Address Field */}
        <div className="form-group">
          <label htmlFor="address">
            <MapPin size={18} />
            Endereço do Evento *
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={errors.address ? 'error' : ''}
            placeholder="Insira o endereço completo do evento."
            rows="3"
          />
          {errors.address && <span className="error-message">{errors.address}</span>}
        </div>

        {/* Form Actions */}
        <div className="form-actions">
          <button 
            type="button" 
            className="cancel-button"
            onClick={onCancel}
          >
            Cancelar
          </button>
          <button 
            type="submit" 
            className="submit-button"
          >
            Confirmar reserva
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;