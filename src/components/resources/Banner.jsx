import { useRef } from "react";
import { Slide } from "react-slideshow-image";
import styled from "styled-components";

export default function Banner() {
  const slideRef = useRef();

  const properties = {
    autoplay: true,
    arrows: false,
    duration: 8000,
    transitionDuration: 600,
  };

  return (
    <Container>
      <Slide ref={slideRef} {...properties}>
        <div className="banner banner1">
          <span>
            <span className="bold">TODOS</span> OS LANÇAMENTOS
          </span>
          <span>
            EM <span className="bold">PROMOÇÃO</span>
          </span>
        </div>
        <div className="banner banner2">
          <span>
            <span className="bold">10%</span> DE DESCONTO
          </span>
          <span>
            EM SUA <span className="bold">1ª COMPRA</span>
          </span>
        </div>
        <div className="banner banner3">
          <span>
            FRETE <span className="bold">GRÁTIS</span>
          </span>
          <span>
            <span className="bold">TODO</span> BRASIL
          </span>
        </div>
      </Slide>
    </Container>
  );
}

const Container = styled.div`
  height: 140px;
  width: 100%;

  .banner {
    height: 140px;
    width: 100%;
    color: var(--white);
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .banner1 {
    background: linear-gradient(90deg, #f6d205 0%, #ff008c 100%);
  }

  .banner2 {
    background: linear-gradient(90deg, #ff008c 0%, #0739dd 50%, #07dd32 100%);
  }

  .banner3 {
    background: linear-gradient(90deg, #07dd32 0%, #f6d205 100%);
  }

  .bold {
    font-size: 40px;
    font-weight: 800;
  }
`;
