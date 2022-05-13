import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import ResetCss from "../styles/resetCss";
import GlobalStyle from "../styles/globalStyles";
import UserProvider from "../contexts/UserContext.jsx";
import DataProvider from "../contexts/DataContext.jsx";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";
import Product from "./Product.jsx";

export default function App() {
  return (
    <>
      <ResetCss />
      <GlobalStyle />
      <Container>
        <UserProvider>
          <DataProvider>
            <BrowserRouter>
              <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<SignUp />} />
                {/* <Route path="/produto" element={<Product />} /> */}
              </Routes>
            </BrowserRouter>
          </DataProvider>
        </UserProvider>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;
