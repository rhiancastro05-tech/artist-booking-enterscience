// Utility functions for localStorage management
// Handles booking data persistence

const BOOKINGS_KEY = 'artist_bookings';

/**
 * Save a new booking to localStorage
 * @param {Object} booking - Booking data object
 * @returns {boolean} - Success status
 */
export function saveBooking(booking) {
  try {
    const bookings = getBookings();
    const newBooking = {
      ...booking,
      id: Date.now().toString(), // Generate unique ID
      createdAt: new Date().toISOString()
    };
    
    bookings.push(newBooking);
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
    return true;
  } catch (error) {
    console.error('Error saving booking:', error);
    return false;
  }
}

/**
 * Get all bookings from localStorage
 * @returns {Array} - Array of booking objects
 */
export function getBookings() {
  try {
    const data = localStorage.getItem(BOOKINGS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading bookings:', error);
    return [];
  }
}

/**
 * Clear all bookings from localStorage
 * @returns {boolean} - Success status
 */
export function clearBookings() {
  try {
    localStorage.removeItem(BOOKINGS_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing bookings:', error);
    return false;
  }
}

/**
 * Get a single booking by ID
 * @param {string} id - Booking ID
 * @returns {Object|null} - Booking object or null
 */
export function getBookingById(id) {
  const bookings = getBookings();
  return bookings.find(booking => booking.id === id) || null;
}