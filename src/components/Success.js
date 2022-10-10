import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Success({
  title,
  day,
  time,
  seatNumber,
  name,
  cpf,
  setSelectedSeat,
  setName,
  setCpf,
  setSeatNumber
}) {
  function clearData() {
    setSelectedSeat([]);
    setName("")
    setCpf("")
    setSeatNumber([])
  }

  return (
    <Order>
      <h2>
        Pedido feito <br />
        com sucesso!
      </h2>
      <OrderDetails>
        <div>
          <h3>Filme e sessão</h3>
          <p>{title}</p>
          <p>
            {day} {time}
          </p>
        </div>
        <div>
          <h3>Ingressos</h3>
          {seatNumber.map((s) => (
            <p key={s}>Assento {s + 1}</p>
          ))}
        </div>
        <div>
          <h3>Comprador</h3>
          <p>{name}</p>
          <p>CPF: {cpf}</p>
        </div>
      </OrderDetails>

      <Link to={"/"}>
        <button onClick={() => clearData()}>Voltar pra Home</button>
      </Link>
    </Order>
  );
}

const Order = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;

  h2 {
    align-self: center;
    font-size: 24px;
    font-weight: 700;
    color: #247a6b;
    text-align: center;
    line-height: 28px;
  }

  h3 {
    font-size: 24px;
    color: #293845;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 22px;
    color: #293845;
    line-height: 25px;
  }

  button {
    margin-top: 50px;
    width: 225px;
    height: 42px;
    border-radius: 3px;
    border: none;
    background-color: #e8833a;
    color: #fff;
    font-size: 18px;
  }
`;

const OrderDetails = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px;

  div {
    margin-top: 30px;
  }
`;
