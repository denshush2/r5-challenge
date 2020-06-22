import React from 'react';
import { IBookComponentProps } from './types';
import { BookComponent, BookDescription } from './styles';
import { useHistory } from 'react-router-dom';

export const Book: React.FC<IBookComponentProps> = ({ book }) => {
  const history = useHistory();

  return (
    <BookComponent
      onClick={() => {
        history.push(`/book/${book.id}`);
      }}
    >
      <img
        src={
          (book.volumeInfo.imageLinks &&
            book.volumeInfo.imageLinks.thumbnail) ||
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0RyrUpGoaoRFjdqesfwVFTCZeWsi9hUJ66WJQx1ARwB9fsiI_&usqp=CAU'
        }
        alt=""
      />
      <BookDescription>
        <span>{book.volumeInfo.contentVersion}</span>
        <h3>{book.volumeInfo.title}</h3>
        <span>{book.volumeInfo.authors[0]}</span>
      </BookDescription>
    </BookComponent>
  );
};
