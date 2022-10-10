import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Movie({ mov }) {
  return (
    <Link to={`/sessoes/${mov.id}`}>
      <StyledMovie key={mov.id}>
        <img data-identifier="movie-outdoor" src={mov.posterURL} alt={mov.title} />
      </StyledMovie>
    </Link>
  );
}

const StyledMovie = styled.li`
  width: 145px;
  height: 209px;
  box-shadow: 0px 2px 4px 2px #0000001a;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;

  img {
    width: 129px;
    height: 193px;
  }
`;
