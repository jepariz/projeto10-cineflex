import styled from "styled-components"

export default function Movie() {
  return (
    <>
     <StyledMovie>
        <img src="https://m.media-amazon.com/images/I/91v-jpsDmYL.jpg" />
      </StyledMovie>
      <StyledMovie>
        <img src="https://m.media-amazon.com/images/I/91v-jpsDmYL.jpg" />
      </StyledMovie>
      <StyledMovie>
        <img src="https://m.media-amazon.com/images/I/91v-jpsDmYL.jpg" />
      </StyledMovie>
      <StyledMovie>
        <img src="https://m.media-amazon.com/images/I/91v-jpsDmYL.jpg" />
      </StyledMovie>     
    </>
   
  )
}

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

`