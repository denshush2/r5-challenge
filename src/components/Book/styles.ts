import styled from 'styled-components';

export const BookComponent = styled.div`
  min-width: 100px;
  max-width: 300px;
  min-height: 200px;
  border: 1px solid black;
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const BookDescription = styled.div`
  padding: 10px;
`;
