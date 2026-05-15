import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

const CartContext = createContext({
  cartCount: 0,
  refreshCart: () => {}
});

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const refreshCart = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const response = await fetch("/api/cart", { headers });
      if (!response.ok) return;
      const data = await response.json();
      setCartCount(data.totalItems || 0);
    } catch (error) {
      console.error("Unable to refresh cart", error);
    }
  }, []);

  useEffect(() => {
    refreshCart();
  }, [refreshCart]);

  return (
    <CartContext.Provider value={{ cartCount, refreshCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
