import React, { createContext, useState, useContext, useEffect } from "react";

const DataContext = createContext();

export default function DataProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let _total = 0;
    cart.forEach((item) => {
      _total += (item.sale ? item.sale : item.price) * item.qtd;
    });
    setTotal(_total);
  }, [cart]);

  return (
    <DataContext.Provider
      value={{
        cart,
        setCart,
        total,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  const { cart, setCart, total } = context;
  return { cart, setCart, total };
}
