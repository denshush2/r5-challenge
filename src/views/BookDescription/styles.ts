import styled from 'styled-components';

export const BookDescriptionComponent = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BookDescGoBack = styled.a`
  align-self: flex-start;
  padding: 5px;
  margin-left: 10px;
  background-color: tomato;
  font-weight: bold;
  border: none;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

export const BookDescContent = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid black;
  margin-top: 10px;
  min-height: 400px;
  justify-content: center;
  padding: 20px;
`;

export const BookDescImage = styled.img`
  width: 33%;
  max-height: 400px;
`;

export const BookDescInfo = styled.div`
  margin-left: 20px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
`;
