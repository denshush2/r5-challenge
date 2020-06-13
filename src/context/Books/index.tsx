import React, { createContext, useState } from 'react';
import { IBooksContext } from './types';
import { IBook } from '../../interfaces/Book.interface';
import { searchBook } from '../../api/searchBooks';
import { ISearchBookInputs } from '../../api/searchBooks/types';

export const BooksContext = createContext<IBooksContext>({
  books: undefined,
  loadBooks: async ({}: ISearchBookInputs) => true,
});

export const BooksProvider: React.FC = ({ children }) => {
  const [books, setbooks] = useState<IBook[]>();

  const loadBooks = async ({
    filter,
    langRestrict,
    maxResults,
    orderBy,
    printType,
    projection,
    query,
  }: ISearchBookInputs): Promise<boolean> => {
    const response = await searchBook({
      query: query,
      filter: filter ? filter : 'full',
      langRestrict: langRestrict ? langRestrict : '',
      maxResults: maxResults ? maxResults : 10,
      orderBy: orderBy ? orderBy : 'newest',
      printType: printType ? printType : 'all',
      projection: projection ? projection : 'full',
    });

    console.log('Response', response);
    return true;
  };
  return (
    <BooksContext.Provider value={{ books, loadBooks }}>
      {children}
    </BooksContext.Provider>
  );
};
