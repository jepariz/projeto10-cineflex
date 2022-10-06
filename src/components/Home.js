import styled from "styled-components"
import MovieList from "./MovieList"

export default function Home() {
  return (
    <MoviesContainer>
        <p>Selecione o filme</p>
       <MovieList />
    </MoviesContainer>
  )
}

const MoviesContainer = styled.div`

width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 50px;

p{
    font-size: 24px;
    color: #293845;
}

`