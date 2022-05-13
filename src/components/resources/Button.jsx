import styled from "styled-components";

export default function Button(props) {
  const { height, width, type, callback, obj, cor, margin, background } = props;
  return (
    <Container
      height={height}
      width={width}
      type={type}
      margin={margin}
      cor={cor}
      background={background}
      onClick={
        obj
          ? (e) => {
              callback(e, obj);
            }
          : callback
      }
    >
      {props.children}
    </Container>
  );
}

const Container = styled.button`
  height: ${(props) => (props.height ? props.height : "45px")};
  width: ${(props) => (props.width ? props.width : "100%")};
  margin: ${(props) => (props.margin ? props.margin : "0 0 15px 0")};
  font-family: "Lexend Deca", sans-serif;
  border: none;
  border-radius: 50px;
  font-size: 20px;
  color: ${(props) => (props.cor ? props.cor : "var(--white)")};
  background-color: ${(props) =>
    props.background ? props.background : "var(--purple)"};
`;
