import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export default function Home() {
  const [movies, setMovies] = useState([]);

  console.log(movies);

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
       {movies.map((mov) =>  <StyledMovie key={mov.id}>
            <img src={mov.posterURL} />
          </StyledMovie>)}
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

const StyledMovie = styled.li`
  width: 145px;
  height: 209px;
  box-shadow: 0px 2px 4px 2px #0000001a;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 129px;
    height: 193px;
  }
`;
