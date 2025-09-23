import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

import './App.css';
import Header from './Component/Header';
import VenueAreaListing from './pages/Venue';
import AreaDetail from './pages/AreaDetail';
import LoadingScreen from './Component/Loadingscreen';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/venue" element={<VenueAreaListing />} />
        {/* <Route path="/venue_dev" element={<VenueDetail />} /> */}
        <Route path="/area_detail" element={<AreaDetail />} />
        <Route path="/loading" element={<LoadingScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
