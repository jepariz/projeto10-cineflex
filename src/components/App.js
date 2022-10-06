import Home from "./Home";
import styled from "styled-components"
import GlobalStyle from "../GlobalStyle";

export default function App() {
  return (
    <>
    <GlobalStyle />
    <StyledHeader>
        <p>CINEFLEX</p>
    </StyledHeader>
   
    <Home />
    
    
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