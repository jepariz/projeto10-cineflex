import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

export default function Session({
  seats,
  setSeats,
  title,
  setTitle,
  day,
  setDay,
  time,
  setTime,
  selectedSeat,
  setSelectedSeat,
  seatNumber,
  setSeatNumber,
  name,
  setName,
  cpf,
  setCpf,
}) {
  const { idSessao } = useParams();
  const [poster, setPoster] = useState("");
  console.log(name, cpf);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
    );

    promise.then((res) => {
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

  function selectSeat(id, index) {
    let seat = [...selectedSeat, id];
    setSelectedSeat(seat);
    setSeatNumber([...seatNumber, index]);
    if (selectedSeat.includes(id)) {
      let novoArrayIds = selectedSeat.filter((seat) => seat !== id);
      setSelectedSeat(novoArrayIds);
      let novoArrayNumbers = seatNumber.filter((seat) => seat !== index);
      setSeatNumber(novoArrayNumbers);
    }
  }

  function orderTickets() {
    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
      {
        ids: selectedSeat,
        name: name,
        cpf: cpf,
      }
    );
    promise.then((res) => console.log(res.data));

    promise.catch((err) => console.log(err.response.data));
  }

  return (
    <>
      <SeatsContainer>
        <p>Selecione o(s) assento(s)</p>
        <StyledSeats>
          {seats.map((s, index) =>
            selectedSeat.includes(s.id) ? (
              <Selected data-identifier="seat" onClick={() => selectSeat(s.id, index)} key={s.id}>
                {s.name}
              </Selected>
            ) : s.isAvailable === false ? (
              <Sold
                onClick={() => alert("Esse assento não está disponível")}
                data-identifier="seat" key={s.id}
              >
                {s.name}
              </Sold>
            ) : (
              <Available data-identifier="seat" onClick={() => selectSeat(s.id, index)} key={s.id}>
                {s.name}
              </Available>
            )
          )}
          <StyledKey >
            <div>
              <Selected data-identifier="seat-selected-subtitle"></Selected>
              <p>Selecionado</p>
            </div>
            <div>
              <Available data-identifier="seat-available-subtitle"></Available>
              <p>Disponível</p>
            </div>
            <div>
              <Sold data-identifier="seat-unavailable-subtitle"></Sold>
              <p>Indisponível</p>
            </div>
          </StyledKey>
        </StyledSeats>
        <Form>
          <div>
            <p>Nome do comprador: </p>
            <input data-identifier="buyer-name-input"
              placeholder="Digite seu nome..."
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <p>CPF do comprador: </p>
            <input data-identifier="buyer-cpf-input"
              placeholder="Digite seu CPF..."
              type="number"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>
          <Link to={"/sucesso"}>
            <button data-identifier="reservation-btn" onClick={() => orderTickets()}>Reservar assento(s)</button>
          </Link>
        </Form>
      </SeatsContainer>
      <StyledFooter>
        <PosterContainer>
          <img data-identifier="movie-img-preview" src={poster} alt={title} />
        </PosterContainer>
        <div data-identifier="movie-and-session-infos-preview">
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
  height: 730px;
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

const Form = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px;
  gap: 10px;
  align-items: center;

  p {
    font-size: 18px;
    color: #293845;
  }

  input {
    margin-top: 5px;
    width: 327px;
    height: 51px;
    border: 1px solid #d4d4d4;
    border-radius: 3px;
    font-size: 18px;
    box-sizing: border-box;
    padding: 10px;
    color: #293845;

    &:placeholder-shown {
      font-size: 18px;
      color: #afafaf;
      font-style: italic;
    }
  }

  button {
    margin-top: 30px;
    width: 225px;
    height: 42px;
    background-color: #e8833a;
    border: none;
    border-radius: 3px;
    color: #fff;
    font-size: 18px;
    align-self: center;
    justify-self: center;
  }
`;
