import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function Session() {
  const { idSessao } = useParams();
  const [seats, setSeats] = useState([]);
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [selectedSeat, setSelectedSeat] = useState([])
  const [available, setAvailable] = useState(false)
  console.log(selectedSeat)
 

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
    );

    promise.then((res) => {
      console.log(res.data);
      setSeats(res.data.seats);
      setTitle(res.data.movie.title);
      setPoster(res.data.movie.posterURL);
      setDay(res.data.day.weekday);
      setTime(res.data.name);
    });

    promise.catch((err) => {
      console.log(err.response.data);
    });
  }, []);

function selectSeat (id){
    let seat = [...selectedSeat, id]
    setSelectedSeat(seat) 
    if(selectedSeat.includes(id)){
     let novoArray = selectedSeat.filter((seat) => seat !== id )
     setSelectedSeat(novoArray)
    }
}

  return (
    <>
      <SeatsContainer>
        <p>Selecione o(s) assento(s)</p>
        <StyledSeats>
          {seats.map((s) => ( selectedSeat.includes(s.id) ? 
            <Selected onClick={() => selectSeat(s.id)} key={s.id}>{s.name}</Selected> : 
            (s.isAvailable === false) ? 
            <Sold key={s.id}>{s.name}</Sold> : 
            <Available onClick={() => selectSeat(s.id)} 
            key={s.id}>{s.name}</Available>
          ))}
          <StyledKey>
            <div>
              <Selected></Selected>
              <p>Selecionado</p>
            </div>
            <div>
              <Available></Available>
              <p>Disponível</p>
            </div>
            <div>
              <Sold></Sold>
              <p>Indisponível</p>
            </div>
          </StyledKey>
        </StyledSeats>
        
      </SeatsContainer>
      <StyledFooter>
        <PosterContainer>
          <img src={poster} alt={title} />
        </PosterContainer>
        <div>
          <p>{title}</p>
          <p>
            {day}-{time}
          </p>
        </div>
      </StyledFooter>
    </>
  );
}

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
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  p {
    font-size: 26px;
    color: #293845;
  }
`;

const PosterContainer = styled.div`
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
`;

const SeatsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  p {
    font-size: 24px;
    color: #293845;
  }
`;

const StyledSeats = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 7px;
  margin-top: 25px;
`;

const StyledKey = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 20px;

  div {
    display: grid;

    p {
      font-size: 13px;
      color: #4e5a65;
      margin-top: 7px;
      justify-self: center;
    }
  }
`;
const Selected = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #1aae9e;
  border: 1px solid #0e7d71;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
`;
const Available = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #c3cfd9;
  border: 1px solid #7b8b99;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
`;
const Sold = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #fbe192;
  border: 1px solid #f7c52b;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
`;
