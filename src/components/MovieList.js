import styled from "styled-components";
import Movie from "./Movie";

export default function MovieList() {
  return (
    <MoviesContainer>
     <Movie />
    </MoviesContainer>
  );
}

const MoviesContainer = styled.ul`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px 25px;
`;
