import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import ListingPage from "./pages/ListingPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <MenuBar />
      
      <Routes>
        {/* Main Home Page: Is mein Hero aur Home sections honge */}
        <Route path="/" element={<Home />} />
        
        {/* Listing Page: Jab user category par click karega */}
        <Route path="/listing" element={<ListingPage />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
