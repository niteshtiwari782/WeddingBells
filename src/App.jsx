import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

import './App.css';
import Header from './Component/Header';
import VenueDetail from './Component/VenueDetails';
import VenueAreaListing from './pages/Venue';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/venue" element={<VenueAreaListing />} />
        <Route path="/venue_dev" element={<VenueDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
