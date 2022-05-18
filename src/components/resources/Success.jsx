import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

export default function Success(props) {
  const {} = props;
  const navigate = useNavigate();

  return (
    <Container>
      <main>
        <h6>Seu pedido efetuado</h6>
        <h6>com sucesso!</h6>
        <Button
          callback={() => {
            navigate("/");
          }}
        >
          Voltar para o início
        </Button>
      </main>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 8;

  main {
    height: 70%;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 10px;
    background-color: var(--white);
  }

  h6 {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;
