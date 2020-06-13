import { IGoogleAPIBookResponse } from '../../interfaces/GoogleAPI.interface';
import { httpServices } from '../../services/httpService';
import { GOOGLE_API_KEY } from '../../config/variables';
import { checkGoogleResponse } from '../../typeguards/googleResponse';

interface ApiResponseSuccess {
  error: false;
  data: IGoogleAPIBookResponse;
}
interface ApiResponseError {
  error: true;
  message: string;
}

//ApiResponseSuccess|ApiResponseError
export const searchBook = async (): Promise<
  ApiResponseSuccess | ApiResponseError
> => {
  try {
    const response = await httpServices().get('/', {
      params: {
        q: 'flowers+inauthor:keyes',
        key: GOOGLE_API_KEY,
      },
    });
    const checkType = checkGoogleResponse(response.data);
    if (checkType === false) throw new Error('Api response not correct');
    return {
      error: false,
      data: checkType,
    };
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
//https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyB5H5mzxIyNrMrTcdJl6Q4cmRX_agxbPps
