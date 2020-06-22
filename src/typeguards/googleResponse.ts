import { IGoogleAPIBooksResponse } from '../interfaces/GoogleAPI.interface';

//Small TypeGuard just for check some things
export const checkGoogleResponseMultiple = (
  data: unknown,
  multiple: boolean
): false | IGoogleAPIBooksResponse<'books' | 'book'> => {
  if (
    multiple === true &&
    (data as IGoogleAPIBooksResponse<'books'>).items &&
    (data as IGoogleAPIBooksResponse<'books'>).kind &&
    (data as IGoogleAPIBooksResponse<'books'>).totalItems
  ) {
    return data as IGoogleAPIBooksResponse<'books'>;
  }
  if (
    multiple === false &&
    (data as IGoogleAPIBooksResponse<'book'>).id &&
    (data as IGoogleAPIBooksResponse<'book'>).kind
  ) {
    return data as IGoogleAPIBooksResponse<'book'>;
  }
  return false;
};

// export const checkBoobleResponse = (
//   data: unknown
// ): false | IGoogleAPIBooksResponse<'book'> => {
//   if ((data as IGoogleAPIBooksResponse<'book'>).)

//   return false;
// };
