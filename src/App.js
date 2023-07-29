import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import ConfirmationPage from "./pages/confirmation";

function App() {
  return (
    <Router>
      <div className="App">
        <ShopContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
          </Routes>
        </ShopContextProvider>
      </div>
    </Router>
  );
}

export default App;
