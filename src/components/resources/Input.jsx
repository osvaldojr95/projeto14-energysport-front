import styled from "styled-components";

export default function Input(props) {
  const { value, setValue, placeholder, type, margin } = props;
  return (
    <Container
      type={type}
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
  width: 100%;
  padding: 0 15px;
  margin: ${props=>props.margin ? props.margin : "0 0 15px 0"};
  background-color: var(--white-app);
  border: 1px solid #D4D4D4;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 400;
  color: var(--black);
`;