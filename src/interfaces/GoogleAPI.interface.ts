import { IBook } from './Book.interface';

export type IGooleAPIBooksResponseList = {
  book: IBook;
  books: {
    kind: string;
    totalItems: number;
    items: IBook[];
  };
};

export type IGoogleAPIBooksResponse<
  T extends keyof IGooleAPIBooksResponseList
> = IGooleAPIBooksResponseList[T];
