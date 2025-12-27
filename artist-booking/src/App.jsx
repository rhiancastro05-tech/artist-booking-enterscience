import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import SuccessPage from './pages/SuccessPage';
import BookingsListPage from './pages/BookingsListPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/bookings" element={<BookingsListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;