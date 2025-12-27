# 🎵 Artist Booking Platform

A modern web application for booking artists for private events. Built with React, Vite, and React Router.

## 📋 Features

- **Artist Search**: Search for artists and bands with an intuitive interface
- **Trending Artists**: View popular artists when no search is performed
- **Booking System**: Complete booking form with validation
- **Bookings Management**: View and manage all your bookings
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Smooth animations and transitions
- **LocalStorage Persistence**: Bookings are saved locally

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd artist-booking
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 🏗️ Project Structure

```
artist-booking/
├── src/
│   ├── components/          # Reusable components
│   │   ├── SearchBar.jsx
│   │   ├── ArtistCard.jsx
│   │   ├── ArtistGrid.jsx
│   │   └── BookingForm.jsx
│   ├── pages/               # Page components
│   │   ├── HomePage.jsx
│   │   ├── BookingPage.jsx
│   │   ├── SuccessPage.jsx
│   │   └── BookingsListPage.jsx
│   ├── services/            # API services
│   │   └── spotifyService.js
│   ├── utils/               # Utility functions
│   │   └── storage.js
│   ├── styles/              # CSS files
│   │   ├── SearchBar.css
│   │   ├── ArtistCard.css
│   │   ├── ArtistGrid.css
│   │   ├── BookingForm.css
│   │   ├── HomePage.css
│   │   ├── BookingPage.css
│   │   ├── SuccessPage.css
│   │   └── BookingsListPage.css
│   ├── App.jsx              # Main app component
│   ├── App.css              # Global styles
│   └── main.jsx             # Entry point
├── public/                  # Static assets
├── index.html              # HTML template
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## 💻 Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and development server
- **React Router DOM**: Client-side routing
- **Lucide React**: Icon library
- **LocalStorage**: Data persistence

## 🎨 Features Implemented

### Required Features
- ✅ Artist search functionality
- ✅ Artist grid/list display
- ✅ Booking form with all required fields
- ✅ Form validation (required fields)
- ✅ Success page after booking
- ✅ View previous bookings
- ✅ LocalStorage for data persistence

### Extra Features
- ✅ Trending artists on homepage (when no search)
- ✅ CSS animations and transitions
- ✅ Loading states with spinner
- ✅ Empty states with helpful messages
- ✅ Responsive design for all screen sizes
- ✅ Visual feedback for user interactions
- ✅ Hover effects on cards and buttons
- ✅ Form error messages with shake animation

## 📱 Pages

### 1. Home Page
- Search bar for finding artists
- Trending artists display (default)
- Grid of artist cards with hover effects
- Navigation to bookings

### 2. Booking Page
- Artist preview
- Complete booking form
- Field validation
- Cancel and submit actions

### 3. Success Page
- Confirmation message
- Navigation options
- Action buttons to home or bookings list

### 4. Bookings List Page
- View all submitted bookings
- Artist images and details
- Event information display
- Clear all bookings option

## 🎯 Usage

1. **Search for Artists**: Use the search bar to find artists by name or genre
2. **Select Artist**: Click on any artist card to proceed with booking
3. **Fill Booking Form**: Complete all required fields (marked with *)
4. **Submit**: Click "Confirm Booking" to save
5. **View Bookings**: Access "My Bookings" from the header to see all bookings

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

- **Semantic HTML**: Proper use of HTML5 semantic tags
- **Component-based**: Modular and reusable components
- **Clean Code**: Well-commented and organized
- **Responsive**: Mobile-first approach
- **Accessible**: ARIA labels and semantic markup

## 📝 Notes

- The application uses mock artist data as the Spotify API requires authentication
- All bookings are stored in localStorage and persist across sessions
- The form includes client-side validation for all required fields
- Date picker is restricted to future dates only

## 🤝 Contributing

This is a test project for an internship position. If you have suggestions or find issues, please feel free to reach out.

## 📧 Contact

For questions about this project, contact: **vagas@enterscience.com.br**

---

**Developed with ❤️ for EnterScience Internship Application**