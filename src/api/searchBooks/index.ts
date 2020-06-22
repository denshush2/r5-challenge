import { IGoogleAPIBooksResponse } from '../../interfaces/GoogleAPI.interface';
import { httpServices } from '../../services/httpService';
import { GOOGLE_API_KEY } from '../../config/variables';
import { checkGoogleResponseMultiple } from '../../typeguards/googleResponse';
import { ISearchBookInputs } from './types';

interface ApiResponseSuccessMultiple {
  error: false;
  multiple: true;
  data: IGoogleAPIBooksResponse<'books'>;
}

interface ApiResponseSuccessSingle {
  error: false;
  multiple: false;
  data: IGoogleAPIBooksResponse<'book'>;
}

interface ApiResponseError {
  error: true;
  message: string;
}

//ApiResponseSuccess|ApiResponseError
export const searchBooks = async ({
  filter,
  langRestrict,
  maxResults,
  orderBy,
  printType,
  projection,
  query,
  multiple,
}: ISearchBookInputs): Promise<
  ApiResponseSuccessMultiple | ApiResponseSuccessSingle | ApiResponseError
> => {
  try {
    let response = null;
    console.log('GETTIng BOOK', multiple);
    if (multiple === true) {
      response = await httpServices().get('/', {
        params: {
          q: query,
          filter,
          langRestrict,
          maxResults,
          orderBy,
          printType,
          projection,
          key: GOOGLE_API_KEY,
        },
      });
    } else {
      response = await httpServices().get(`/${query}`, {
        params: {
          key: GOOGLE_API_KEY,
        },
      });
    }

    const checkType = checkGoogleResponseMultiple(response.data, multiple);
    console.log('Response API', response);
    if (checkType === false) throw new Error('Api response not correct');
    console.log('Api', multiple);
    if (multiple) {
      return {
        error: false,
        multiple: true,
        data: checkType as IGoogleAPIBooksResponse<'books'>,
      };
    } else {
      return {
        error: false,
        multiple: false,
        data: checkType as IGoogleAPIBooksResponse<'book'>,
      };
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: true,
        message: error.message,
      };
    }
    return {
      error: true,
      message: 'Error fetching Data',
    };
  }
};
export const searchBook = async () => {};
//https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyB5H5mzxIyNrMrTcdJl6Q4cmRX_agxbPps
