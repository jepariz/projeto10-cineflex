import Home from "./Home";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MovieSession from "./MovieSession";
import Session from "./Session";
import Success from "./Success";
import { useState } from "react";

export default function App() {
  const [seats, setSeats] = useState([]);
  const [title, setTitle] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [seatNumber, setSeatNumber] = useState([]);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Link style={{ textDecoration: "none" }} to="/">
          <StyledHeader>
            <p>CINEFLEX</p>
          </StyledHeader>
        </Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sessoes/:idFilme" element={<MovieSession />} />
          <Route
            path="/sessoes/:idFilme/assentos/:idSessao"
            element={
              <Session
                seats={seats}
                setSeats={setSeats}
                title={title}
                setTitle={setTitle}
                day={day}
                setDay={setDay}
                time={time}
                setTime={setTime}
                selectedSeat={selectedSeat}
                setSelectedSeat={setSelectedSeat}
                seatNumber={seatNumber}
                setSeatNumber={setSeatNumber}
                name={name}
                setName={setName}
                cpf={cpf}
                setCpf={setCpf}
              />
            }
          />
          <Route
            path="/sucesso"
            element={
              <Success
                title={title}
                day={day}
                time={time}
                seatNumber={seatNumber}
                name={name}
                cpf={cpf}
                setSelectedSeat={setSelectedSeat}
                setName={setName}
                setCpf={setCpf}
                setSeatNumber={setSeatNumber}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const StyledHeader = styled.div`
  width: 100%;
  height: 67px;
  background-color: #c3cfd9;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 34px;
    color: #e8833a;
  }
`;
