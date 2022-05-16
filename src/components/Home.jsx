import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useUser } from "../contexts/UserContext.jsx";
import { useData } from "../contexts/DataContext.jsx";
import Header from "./resources/Header.jsx";
import Banner from "./resources/Banner.jsx";
import ItemList from "./resources/ItemList.jsx";

export default function Home() {
  const [categoria, setCategoria] = useState("Todos");
  const [produtos, setProdutos] = useState([]);
  const [refresh, setRefresh] = useState([]);
  const { setProduto } = useUser();

  const categorias = () => {
    return (
      <Categorias>
        <Categoria onClick={() => setCategoria("Tênis")}>
          <span>TÊNIS E</span>CHUTEIRAS
        </Categoria>
        <Categoria onClick={() => setCategoria("Acessórios")}>
          ACESSÓRIOS
        </Categoria>
        <Categoria onClick={() => setCategoria("Camisas")}>CAMISAS</Categoria>
        <Categoria onClick={() => setCategoria("Todos")}>TODOS</Categoria>
      </Categorias>
    );
  };

  useEffect(() => {
    setProduto({});
  }, []);

  useEffect(() => {
    const getProdutos = async () => {
      const URL = "https://back-energysport.herokuapp.com/products" + (categoria === "Todos" ? "" : `?type=${categoria}`);
      try {
        const response = await axios.get(URL, {}, {});
        const { data } = response;
        let list = [...data];
        if (categoria !== "Todos") {
          list = list.filter((item) => {
            if (item.type === categoria) {
              return true;
            }
            return false;
          });
        }
        list = list.map((item) => {
          return <ItemList key={item._id} {...item} />;
        });
        setProdutos(<Lista>{list}</Lista>);
        setRefresh([]);
      } catch (e) {}
    };
    getProdutos();
  }, [categoria]);

  return (
    <Container>
      <Header />
      <Banner />
      {categorias()}
      <main>
        <h3>Categoria: {categoria}</h3>
        {produtos ?? <></>}
      </main>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  background: var(--background);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 50px 0;

  main {
    height: auto;
    width: 100%;
    padding: 0 10px;
  }

  h3 {
    width: 100%;
    margin-bottom: 15px;
    margin-top: 30px;
    color: #767676;
    font-size: 14px;
    font-weight: 400;
    font-family: "Lexend Deca", sans-serif;
  }
`;

const Categorias = styled.div`
  height: 50px;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Categoria = styled.div`
  height: 100%;
  width: 24%;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Lexend Zetta", sans-serif;
  font-size: 8px;
  font-weight: 400;
  background-color: var(--purple);
  color: var(--white);
  box-shadow: var(--shadow);
`;

const Lista = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-grow: 0;
  flex-shrink: 0;
`;
