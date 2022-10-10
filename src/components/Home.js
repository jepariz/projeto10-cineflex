import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Movie from "./Movie";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );

    promise.then((resp) => {
      setMovies(resp.data);
    });

    promise.catch((err) => {
      alert(err.response.data);
    });
  }, []);

  return (
    <MoviesContainer>
      <p>Selecione o filme</p>

      <StyledMoviesList>
        {movies.map((mov) => (
          <Movie key={mov.id} mov={mov} />
        ))}
      </StyledMoviesList>
    </MoviesContainer>
  );
}

const MoviesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  p {
    font-size: 24px;
    color: #293845;
  }
`;

const StyledMoviesList = styled.ul`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px 25px;
`;
