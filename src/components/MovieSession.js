
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios"
import { useEffect, useState } from "react";

export default function MovieSession() {

  const [day, setDay] = useState([]);
  const [movieTitle, setMovieTitle] = useState("")
  const [movieImage, setMovieImage] = useState("")
  const { idFilme } = useParams();

  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)

    promise.then((res) => {
      setMovieTitle(res.data.title)
      setMovieImage(res.data.posterURL)
      setDay(res.data.days)
    })

    promise.catch((err) => {
      console.log(err.response.data)
    })
  },[])

  return (
    <MovieInfoContainer>
      <p>Selecione o Horário</p>
      <MovieSessionsContainer>
       
        <SessionInfo>
         {day.map((f) => < div key={f.id}><p>
            {f.date} - {f.weekday}
          </p>
          <SessionTime>
            <Link to={`assentos/${f.showtimes[0].id}`}><button key={f.showtimes[0].id}>{f.showtimes[0].name}</button></Link>
            <Link to={`assentos/${f.showtimes[1].id}`}><button key={f.showtimes[1].id}>{f.showtimes[1].name}</button></Link>
           
          </SessionTime></div>)}
        </SessionInfo>

      </MovieSessionsContainer>

      <StyledFooter>
        <div>
          <img src={movieImage} alt={movieTitle} />
        </div>
        <p>{movieTitle}</p>
      </StyledFooter>
     
    </MovieInfoContainer>
  );
}

const MovieInfoContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 24px;
    color: #293845;
  }
`;

const MovieSessionsContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-left: 40px;
  margin-bottom: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SessionInfo = styled.div`
  p {
    font-size: 20px;
    color: #293845;
  }
`;
const SessionTime = styled.div`
  margin-top: 25px;
  margin-bottom: 30px;
  display: flex;
  gap: 10px;

  button {
    width: 83px;
    height: 43px;
    border: none;
    border-radius: 3px;
    background-color: #e8833a;
    color: #ffffff;
    font-size: 18px;
  }
`;

const StyledFooter = styled.div`
  width: 100%;
  height: 117px;
  background-color: #dfe6ed;
  border: 1px solid #9eadba;
  display: flex;
  gap: 10px;
  box-sizing: border-box;
  padding: 15px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;

  div {
    width: 64px;
    height: 89px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 2px;

    img {
      width: 48px;
      height: 72px;
    }
  }

  p {
    font-size: 26px;
    color: #293845;
    align-self: center;
  }
`;