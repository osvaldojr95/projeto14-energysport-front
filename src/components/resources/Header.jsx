import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { useUser } from "../../contexts/UserContext";

export default function Header() {
  const { userInfo, setUserInfo } = useUser();
  const navigate = useNavigate();

  const account = () => {
    if (userInfo.name) {
      return (
        <>
          <h2>{userInfo.name}</h2>
          <MdLogout
            className="logout"
            onClick={() => {
              setUserInfo({});
            }}
          />
        </>
      );
    }

    return (
      <h2
        onClick={() => {
          navigate("/login");
        }}
      >
        Login/Cadastro
      </h2>
    );
  };

  const logout = async () => {
    const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };
    const URL = "https://projeto13-backend.herokuapp.com/sign-out";
    try {
      await axios.post(URL, {}, config);
      localStorage.removeItem("userInfo");
      setUserInfo({});
    } catch (e) {}
  };

  useEffect(() => {
    const verifyLogin = async () => {
      const infoSerializado = localStorage.getItem("userInfo");
      if (infoSerializado) {
        const user = JSON.parse(infoSerializado);
        setUserInfo(user);
      } else {
        localStorage.removeItem("userInfo");
      }
    };
    verifyLogin();
  }, []);

  return (
    <Container>
      <BsCart3
        className="cart"
        onClick={() => {
          navigate("/carrinho");
        }}
      />
      <Logo
        onClick={() => {
          navigate("/");
        }}
      >
        LOGO
      </Logo>
      <Account>{account()}</Account>
    </Container>
  );
}

const Container = styled.button`
  height: 50px;
  width: 100%;
  padding: 0 15px;
  position: absolute;
  top: 0;
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

  .cart {
    font-size: 20px;
    color: var(--white);
  }
`;

const Logo = styled.h1`
  font-family: "Lexend Zetta", sans-serif;
  font-size: 30px;
  color: var(--white);
  position: absolute;
  top: auto;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Account = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 12px;
    color: var(--white);
  }

  .logout {
    margin-left: 10px;
    font-size: 20px;
    color: var(--white);
  }
`;
