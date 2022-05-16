import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useUser } from "../contexts/UserContext";
import Input from "./resources/Input.jsx";
import Button from "./resources/Button.jsx";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUserInfo } = useUser();

  const showError = () => {
    if (!error) {
      return <></>;
    }

    let text;
    switch (parseInt(error.response.status)) {
      case 422:
        text = "Dados insuficientes";
        break;

      case 404:
        text = "Usuário não encontrado";
        break;

      case 401:
        text = "Senha incorreta";
        break;

      case 500:
        text = "Erro inesperado";
        break;

      case 409:
        text = "Senhas Diferentes";
        break;

      default:
        text = "Erro inesperado";
        break;
    }
    return <Aviso>{text}</Aviso>;
  };

  const signup = async (e) => {
    e.preventDefault();
    if (confirm === password) {
      const URL = "https://back-energysport.herokuapp.com/signup";
      const obj = { name, password };
      const config = {
        headers: { User: email },
      };
      try {
        await axios.post(URL, obj, config);
        setError("");
        navigate("/login");
      } catch (err) {
        setError(err);
      }
    } else {
      let err = new Error("Senhas Diferentes!");
      err.response.status = 409;
      setError(err);
    }
  };

  useEffect(() => {
    const verifyLogin = async () => {
      const infoSerializado = localStorage.getItem("userInfo");
      if (infoSerializado) {
        const user = JSON.parse(infoSerializado);
        setUserInfo(user);
        navigate("/home");
      } else {
        console.log("remove?");
        localStorage.removeItem("userInfo");
      }
    };
    verifyLogin();
  }, []);

  return (
    <Container>
      <Logo>LOGO</Logo>
      <form>
        <Input
          type="input"
          value={name}
          setValue={setName}
          placeholder="Senha"
        />
        <Input
          type="email"
          value={email}
          setValue={setEmail}
          placeholder="E-mail"
        />
        <Input
          type="password"
          value={password}
          setValue={setPassword}
          placeholder="Senha"
        />
        <Input
          type="password"
          value={confirm}
          setValue={setConfirm}
          placeholder="Confirme sua Senha"
        />
        {showError()}
        <Button type="submit" callback={signup}>
          Entrar
        </Button>
      </form>
      <Cadastro>Já tem uma conta?</Cadastro>
      <Button
        margin="15px 0 0 0"
        callback={() => {
          navigate("/login");
        }}
      >
        Faça Login
      </Button>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 50px 40px;
  background: var(--background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    width: 100%;
  }
`;

const Logo = styled.h1`
  font-family: "Lexend Zetta", sans-serif;
  font-size: 60px;
  color: var(--purple);
  margin-bottom: auto;
`;

const Aviso = styled.h5`
  width: 100%;
  font-family: "Lexend Deca", sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: var(--red);
  margin-bottom: 20px;
`;

const Cadastro = styled.h4`
  font-family: "Lexend Deca", sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: var(--purple);
  margin-top: 30px;
`;
