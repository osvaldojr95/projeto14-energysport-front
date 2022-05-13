import React, { createContext, useState, useContext } from "react";

const DataContext = createContext();

export default function DataProvider({ children }) {
  const [data, setData] = useState([
    {
      _id: "01",
      img: "https://imgcentauro-a.akamaihd.net/900x900/97007701/tenis-mizuno-wave-prophecy-11s-masculino-img.jpg",
      name: "Tênis Mizuno Wave Prophecy 11S - Masculino",
      price: 1599.99,
      sale: 1499.99,
      parcel: 12,
      type: "Tênis",
    },
    {
      _id: "02",
      img: "https://imgcentauro-a.akamaihd.net/900x900/96611131/tenis-asics-gel-nimbus-24-masculino-img.jpg",
      name: "Tênis Asics Gel-Nimbus 24 - Masculino",
      price: 1099.99,
      parcel: 12,
      type: "Tênis",
    },
    {
      _id: "03",
      img: "https://imgcentauro-a.akamaihd.net/900x900/9661152Y/tenis-asics-gel-nimbus-24-feminino-img.jpg",
      name: "Tênis Asics Gel-Nimbus 24 - Feminino",
      price: 1099.99,
      parcel: 12,
      type: "Tênis",
    },
    {
      _id: "04",
      img: "https://imgcentauro-a.akamaihd.net/900x900/97007719/tenis-mizuno-wave-prophecy-11s-masculino-img.jpg",
      name: "Tênis Mizuno Wave Prophecy 11S - Masculino",
      price: 1599.99,
      sale: 1499.99,
      parcel: 12,
      type: "Tênis",
    },
    {
      _id: "05",
      img: "https://imgcentauro-a.akamaihd.net/900x900/966111T8/tenis-asics-gel-nimbus-24-masculino-img.jpg",
      name: "Tênis Asics Gel-Nimbus 24 - Masculino",
      price: 1099.99,
      parcel: 12,
      type: "Tênis",
    },
    {
      _id: "06",
      img: "https://imgcentauro-a.akamaihd.net/900x900/966115TJ/tenis-asics-gel-nimbus-24-feminino-img.jpg",
      name: "Tênis Asics Gel-Nimbus 24 - Feminino",
      price: 1099.99,
      parcel: 12,
      type: "Tênis",
    },
    {
      _id: "07",
      img: "https://imgcentauro-a.akamaihd.net/900x900/96943532/tenis-adidas-ultraboost-22-lep-masculino-img.jpg",
      name: "Tênis adidas Ultraboost 22 LEP - Masculino",
      price: 1199.99,
      parcel: 12,
      type: "Tênis",
    },
    {
      _id: "08",
      img: "https://imgcentauro-a.akamaihd.net/900x900/96611129/tenis-asics-gel-nimbus-24-masculino-img.jpg",
      name: "Tênis Asics Gel-Nimbus 24 - Masculino",
      price: 1599.99,
      sale: 1499.99,
      parcel: 12,
      type: "Tênis",
    },
    {
      _id: "09",
      img: "https://imgcentauro-a.akamaihd.net/900x900/966115Q2/tenis-asics-gel-nimbus-24-feminino-img.jpg",
      name: "Tênis Asics Gel-Nimbus 24 - Feminino",
      price: 1099.99,
      parcel: 12,
      type: "Tênis",
    },
  ]);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
export function useData() {
  const context = useContext(DataContext);
  const { data, setData } = context;
  return { data, setData };
}
