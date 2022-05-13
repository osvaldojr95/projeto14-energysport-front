import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { BsTagFill } from "react-icons/bs";
import { useUser } from "../contexts/UserContext";
import { useData } from "../contexts/DataContext";
import Header from "./resources/Header.jsx";
import Banner from "./resources/Banner.jsx";
import Button from "./resources/Button.jsx";
import ItemList from "./resources/ItemList";

export default function Product() {
  const [produtos, setProdutos] = useState([]);
  const { produto, userInfo } = useUser();
  const { data } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!produto.name) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    const getProdutos = async () => {
      // const URL = "https://projeto13-backend.herokuapp.com/sign-in";
      try {
        // const response = await axios.post(URL, obj, config);
        // setError("");
        // const { data } = response;

        const lista = data.map((item) => {
          return <ItemList key={item._id} {...item} />;
        });
        setProdutos([...lista]);
      } catch (e) {}
    };
    getProdutos();
  }, []);

  return (
    <Container>
      <Header />
      <Banner />
      <Details>
        <div className="image">
          <img src={produto.img} />
          {produto.sale ? (
            <>
              <BsTagFill className="sale" />
              <span>PROMOÇÃO</span>
            </>
          ) : (
            <></>
          )}
        </div>
        <h2>{produto.name}</h2>
        {produto.sale ? (
          <>
            <h4>R{produto.sale}</h4>
            <h3>R${produto.price}</h3>
          </>
        ) : (
          <h3>R{produto.price}</h3>
        )}
        <h5>
          Até {produto.parcel}x de R$
          {(
            (produto.sale ? produto.sale : produto.price) / produto.parcel
          ).toFixed(2)}{" "}
          sem juros
        </h5>
        <Button>Adicionar ao Carrinho</Button>
      </Details>
      <Lista>{produtos}</Lista>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  background: var(--background);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 50px 0;
`;

const Details = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 40px;
  padding-bottom: 50px;

  img {
    height: auto;
    width: 100%;
    margin: 0 auto;
    position: relative;
  }

  h2 {
    margin-top: 20px;
    margin-bottom: 20px;
    color: #767676;
    font-size: 20px;
    font-weight: 700;
  }

  h3 {
    color: var(--black);
    font-size: 32px;
    font-weight: 400;
  }

  h4 {
    color: var(--grey);
    font-size: 14px;
    font-weight: 400;
    text-decoration: line-through;
  }

  h5 {
    margin-top: 10px;
    color: var(--greyDark);
    font-size: 14px;
    font-weight: 400;
  }

  span {
    color: var(--purple);
    font-size: 28px;
    font-weight: 700;
    position: absolute;
    bottom: 1px;
    left: 35px;
  }

  .image {
    width: 100%;
    height: auto;
    position: relative;
  }

  .sale {
    bottom: 0;
    left: 0;
    font-size: 30px;
    color: var(--purple);
    z-index: 3;
    position: absolute;
  }
`;

const Lista = styled.div`
  height: 90px;
  width: 100%;
  padding: 0 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-grow: 0;
  flex-shrink: 0;
  font-family: "Lexend Deca", sans-serif;
`;