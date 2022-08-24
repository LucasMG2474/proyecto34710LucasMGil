import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([{ itemA: "titulo itemA" }]);
  function addToCart(item, quantity) {
    if (isInCart(item.id)) {
      console.log("el item exite");
    } else {
      let cartContent = [...cart];
      cartContent.push({ ...item, quantity: quantity });
      setCart(cartContent);
    }
  }
  function isInCart(id) {
    return cart.some((el) => el.id === id);
  }
  return (
    <cartContext.Provider value={{ cart, addToCart }}>
      {children}
    </cartContext.Provider>
  );
}
