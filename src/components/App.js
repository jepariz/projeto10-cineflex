import Home from "./Home";
import styled from "styled-components"
import GlobalStyle from "../GlobalStyle";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import MovieSession from "./MovieSession";


export default function App() {
  return (
    <>
    <BrowserRouter>
    <GlobalStyle />
    <Link style={{textDecoration: 'none'}} to="/" >
    <StyledHeader>
        <p>CINEFLEX</p>
    </StyledHeader>
    </Link>
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/sessoes/:idFilme" element={<MovieSession />} />
    
    </Routes>
    </BrowserRouter>
    </>
  )
}

const StyledHeader = styled.div` 

width: 100%;
height: 67px;
background-color: #C3CFD9;
display: flex;
align-items: center;
justify-content: center;

p{
    font-size: 34px;
    color: #E8833A;
}

`