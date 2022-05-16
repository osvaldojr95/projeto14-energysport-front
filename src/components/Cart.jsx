import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { useUser } from "../contexts/UserContext";
import { useData } from "../contexts/DataContext.jsx";
import Header from "./resources/Header.jsx";
import Button from "./resources/Button.jsx";

export default function Cart() {
  const [refresh, setRefresh] = useState([]);
  const { userInfo } = useUser();
  const { data, cart, setCart } = useData();
  const navigate = useNavigate();

  const lista = () => {
    return cart.map((item, index) => {
      return (
        <Item key={index}>
          <img src={item.img} />
          <BsFillTrashFill className="trash" onClick={deleteItem(item._id)} />
          <h4>{item.name}</h4>
          <div className="direita">
            <h5>R${item.sale ? item.sale : item.price}</h5>
            <div className="quantidade">
              <AiFillMinusCircle
                className="botao"
                onClick={() => {
                  updateQtd(item._id,item.qtd - 1);
                }}
              />
              <h6>{item.parcel}</h6>
              <AiFillPlusCircle
                className="botao"
                onClick={() => {
                  updateQtd(item._id,item.qtd + 1);
                }}
              />
            </div>
          </div>
        </Item>
      );
    });
  };

  const updateQtd = (id, qtd) => {
    // const URL = "/cart";
    // const obj = { id, qtd };
    // const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };
    // try {
    //   await axios.put(URL, obj, config);
    //   setRefresh([]);
    // } catch (err) {}
  };

  const deleteItem = (id) => {
    // const obj = { id };
    // const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };
    // try {
    //   await axios.delete(URL, obj, config);
    //   setRefresh([]);
    // } catch (err) {}
  };

  useEffect(() => {
    if (!userInfo.name) {
      navigate("/");
    }
  }, [userInfo]);

  useEffect(() => {
    const getCarrinho = async () => {
      // const URL = "/cart";
      // const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };
      try {
        // const response = await axios.get(URL, {}, config});
        // const { data } = response;
        setCart([...data.slice(4)]);
      } catch (e) {}
    };
    getCarrinho();
  }, [refresh]);

  return (
    <Container>
      <Header />
      <h3>Confirme a quantidade de cada item</h3>
      <main>{lista()}</main>
      <Controle>
        <Button
          callback={() => {
            navigate("/");
          }}
          background="var(--white)"
          cor="var(--purple)"
          size="15px"
          border="2px solid var(--purple)"
        >
          Continuar Comprando
        </Button>
        <Button
          callback={() => {
            navigate("/confirmacao");
          }}
          size="15px"
        >
          Finalizar Compra
        </Button>
      </Controle>
      {/* <footer></footer> */}
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background: var(--background);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 50px 10px 90px 10px;

  main {
    height: auto;
    width: 100%;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  h3 {
    width: 100%;
    margin-top: 20px;
    color: var(--black);
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    font-family: "Lexend Deca", sans-serif;
  }

  footer {
    height: 90px;
    width: 100%;
    padding: 0 15px;
    position: fixed;
    bottom: 0;
    left: 0;
    border: none;
    background: linear-gradient(
      13deg,
      rgba(130, 0, 204, 1) 0%,
      rgba(192, 0, 255, 1) 100%
    );
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 5;
  }
`;

const Item = styled.div`
  height: 110px;
  width: 100%;
  margin-bottom: 10px;
  padding: 0 10px;
  border: 1px solid var(--grey);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  img {
    height: auto;
    width: 100px;
    margin-right: 20px;
    margin-left: 10px;
  }

  .trash {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 16px;
    color: var(--red);
  }

  h4 {
    height: auto;
    width: auto;
    font-size: 14px;
  }

  h5 {
    font-size: 16px;
  }

  h6 {
    width: 25px;
    margin: 0 4px;
    font-size: 18px;
    text-align: center;
  }

  .direita {
    height: 100%;
    width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .quantidade {
    height: auto;
    width: 100px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .botao {
    font-size: 24px;
    color: var(--purple);
  }
`;

const Controle = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;
