import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useUser } from "../contexts/UserContext";
import { useData } from "../contexts/DataContext.jsx";
import Header from "./resources/Header.jsx";
import Button from "./resources/Button.jsx";
import Input from "./resources/Input";

export default function Checkout() {
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const { userInfo } = useUser();
  const { total } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo.name) {
      navigate("/");
    }
  }, [userInfo]);

  return (
    <Container>
      <Header />
      <h3>Escolha o endereço de entrega!</h3>
      <main>
        <form>
          <Item>
            <Block width="80%">
              <label name="cidade">Cidade</label>
              <Input id="cidade" value={cidade} setValue={setCidade} />
            </Block>
            <Block width="20%">
              <label name="estado">Estado</label>
              <Input id="estado" value={estado} setValue={setEstado} />
            </Block>
          </Item>
          <Item>
            <Block width="70%">
              <label name="bairro">Bairro</label>
              <Input id="bairro" value={bairro} setValue={setBairro} />
            </Block>
            <Block width="30%">
              <label name="cep">CEP</label>
              <Input id="cep" value={cep} setValue={setCep} />
            </Block>
          </Item>
          <Item>
            <Block width="80%">
              <label name="rua">Rua</label>
              <Input id="rua" value={rua} setValue={setRua} />
            </Block>
            <Block width="20%">
              <label name="numero">Número</label>
              <Input id="numero" value={numero} setValue={setNumero} />
            </Block>
          </Item>
          <Item>
            <Block width="100%">
              <label name="complemento">Complemento</label>
              <Input
                id="complemento"
                value={complemento}
                setValue={setComplemento}
              />
            </Block>
          </Item>
        </form>
        <h4>Valor total: R${total}</h4>
        <div className="controle">
          <Button
            size="16px"
            background="var(--white)"
            border="1px solid var(--purple)"
            cor="var(--purple)"
            callback={() => {
              navigate("/carrinho");
            }}
          >
            Voltar ao Carrinho
          </Button>
          <Button
            size="16px"
            callback={() => {
              // EFETUAR COMPRA

            }}
          >
            Efetuar Pedido
          </Button>
        </div>
      </main>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: var(--background);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 50px 20px;

  h3 {
    width: 100%;
    margin-top: 20px;
    color: var(--black);
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    font-family: "Lexend Deca", sans-serif;
  }

  h4 {
    width: 100%;
    margin-top: 20px;
    color: var(--black);
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    font-family: "Lexend Deca", sans-serif;
  }

  main {
    height: auto;
    width: 100%;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .controle {
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
`;

const Item = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const Block = styled.div`
  height: auto;
  width: ${(props) => (props.width ? props.width : "auto")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  label {
    width: 100%;
    color: var(--black);
    font-size: 14px;
    font-weight: 400;
    font-family: "Lexend Deca", sans-serif;
    margin-bottom: 5px;
  }
`;
