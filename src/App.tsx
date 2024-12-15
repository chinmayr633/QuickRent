// App.tsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AllGadgetsPage from './pages/AllGadgetsPage';
import ContactForm from './pages/ContactUs';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import ModalController from './components/ModalController';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <ModalController/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gadgets" element={<AllGadgetsPage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
