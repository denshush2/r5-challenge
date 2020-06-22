import React, { createContext, useState, useContext, useEffect } from 'react';
import { IBooksContext } from './types';
import { IBook } from '../../interfaces/Book.interface';
import { searchBooks } from '../../api/searchBooks';
import { ISearchBookInputs } from '../../api/searchBooks/types';
import { AppContext } from '../App';
import { IGoogleAPIBooksResponse } from '../../interfaces/GoogleAPI.interface';

export const BooksContext = createContext<IBooksContext>({
  books: undefined,
  loadBooks: async ({ query }: ISearchBookInputs) => {},
  resetBooks: () => null,
});

export const BooksProvider: React.FC = ({ children }) => {
  const [books, setBooks] = useState<IBook[]>();
  const { setAppLoading } = useContext(AppContext);
  useEffect(() => {
    console.log('REFRESHING');
  }, [books]);
  const loadBooks = async ({
    filter,
    langRestrict,
    maxResults,
    orderBy,
    printType,
    projection,
    query,
    multiple,
  }: ISearchBookInputs): Promise<void> => {
    try {
      setAppLoading(true);
      console.log('MULTIPLE', multiple);
      const response = await searchBooks({
        query: query,
        filter: (filter && filter) || 'ebooks',
        langRestrict: (langRestrict && langRestrict) || '',
        maxResults: (maxResults && maxResults) || 10,
        orderBy: (orderBy && orderBy) || 'newest',
        printType: (printType && printType) || 'books',
        projection: (projection && projection) || 'full',
        multiple: multiple && multiple,
      });
      console.log('Response', response);
      if (response.error === true) throw new Error('Error Fetching data');

      if (multiple === true && response.error === false)
        setBooks([
          ...(response.data as IGoogleAPIBooksResponse<'books'>).items,
        ]);
      else
        setBooks([{ ...(response.data as IGoogleAPIBooksResponse<'book'>) }]);

      // response;

      setAppLoading(false);
    } catch (error) {
      setAppLoading(false);
      if (error instanceof Error) {
        console.log({
          error: true,
          message: error.message,
        });
      }
      console.log({
        error: true,
        message: 'Error fetching Data',
      });
    }
  };
  const resetBooks = () => setBooks([]);

  return (
    <BooksContext.Provider value={{ books, loadBooks, resetBooks }}>
      {children}
    </BooksContext.Provider>
  );
};
