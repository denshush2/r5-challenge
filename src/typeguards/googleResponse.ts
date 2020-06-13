import { IGoogleAPIBookResponse } from '../interfaces/GoogleAPI.interface';

//Small TypeGuard
export const checkGoogleResponse = (
  data: unknown
): false | IGoogleAPIBookResponse => {
  if (
    (data as IGoogleAPIBookResponse).items &&
    (data as IGoogleAPIBookResponse).kind &&
    (data as IGoogleAPIBookResponse).totalItems
  )
    return data as IGoogleAPIBookResponse;
  return false;
};
