import styled from "styled-components";

export default function Input(props) {
  const { value, width, setValue, placeholder, type, margin, id } = props;
  return (
    <Container
      id={id ?? ""}
      type={type}
      width={width}
      margin={margin}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
}

const Container = styled.input`
  height: 45px;
  width: ${(props) => (props.width ? props.width : "100%")};
  padding: 0 15px;
  margin: ${(props) => (props.margin ? props.margin : "0 0 15px 0")};
  background-color: var(--white-app);
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 400;
  color: var(--black);
`;
