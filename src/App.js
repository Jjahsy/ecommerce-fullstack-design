import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import ListingPage from "./pages/ListingPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminPage from "./pages/AdminPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProfilePage from "./pages/ProfilePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <MenuBar />

          <Routes>
            {/* Main Home Page: Is mein Hero aur Home sections honge */}
            <Route path="/" element={<Home />} />

            {/* Listing Page: Jab user category par click karega */}
            <Route path="/listing" element={<ListingPage />} />

            {/* Product Details Page */}
            <Route path="/product/:id" element={<ProductDetailsPage />} />

            {/* Cart Page */}
            <Route path="/cart" element={<CartPage />} />

            {/* Checkout Page */}
            <Route path="/checkout" element={<CheckoutPage />} />

            {/* Authentication Pages */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* User Profile */}
            <Route path="/profile" element={<ProfilePage />} />

            {/* Admin Page */}
            <Route path="/admin" element={<AdminPage />} />

            {/* Information Pages */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>

          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
