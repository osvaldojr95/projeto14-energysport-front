import styled from "styled-components";

export default function Logo(props) {
  const { type, callback } = props;

  return (
    <Container type={type} onClick={callback}>
      <h1>Energy</h1>
      <h1 className="down">Sports</h1>
    </Container>
  );
}

const Container = styled.div`
  height: 45px;
  width: ${(props) => (props.type ? "100%" : "250px")};
  position: ${(props) => (props.type ? "inherit" : "absolute")};
  top: ${(props) => (props.type ? "inherit" : "auto")};
  left: ${(props) => (props.type ? "inherit" : "50%")};
  transform: ${(props) => (props.type ? "inherit" : "translate(-50%, 0)")};
  color: ${(props) => (props.type ? "var(--purple)" : "var(--white)")};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: ${(props) => (props.type ? "auto" : "0")};

  h1 {
    width: 100%;
    font-family: "Lexend Zetta", sans-serif;
    font-size: ${(props) => (props.type ? "30px" : "14px")};
    text-align: center;
  }

  .down {
    width: 100%;
    font-family: "Lexend Zetta", sans-serif;
    font-size: ${(props) => (props.type ? "40px" : "20px")};
    font-weight: 700;
    text-align: center;
  }
`;
