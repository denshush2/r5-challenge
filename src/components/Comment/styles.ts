import styled from 'styled-components';

export const CommentStyledComponent = styled.div`
  display: grid;
  margin-bottom: 10px;
  grid-template-areas:
    'text text'
    'by time';

  p {
    border-top: 1px solid black;
    grid-area: text;
  }
  span {
    grid-area: by;
    border-bottom: 1px solid black;
  }
  i {
    grid-area: time;
    border-bottom: 1px solid black;
  }
`;
