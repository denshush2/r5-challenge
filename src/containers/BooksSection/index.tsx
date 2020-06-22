import React, { useContext } from 'react';
import { IBooksSectionProps } from './types';
import { Book } from '../../components/Book';
import { BooksSectionComponent } from './styles';

export const BooksSection: React.FC<IBooksSectionProps> = ({ books }) => {
  return (
    <BooksSectionComponent>
      {books.map((book) => (
        <Book book={book} key={book.etag} />
      ))}
    </BooksSectionComponent>
  );
};
