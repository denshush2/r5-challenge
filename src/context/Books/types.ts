import { IBook } from '../../interfaces/Book.interface';
import { Dispatch, SetStateAction } from 'react';
import { ISearchBookInputs } from '../../api/searchBooks/types';

export interface IBooksContext {
  books: IBook[] | undefined;
  loadBooks: ({}: ISearchBookInputs) => Promise<boolean>;
}
