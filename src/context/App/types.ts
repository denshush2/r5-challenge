import { SetStateAction, Dispatch } from 'react';

export interface IAppContext {
  appLoading: boolean;
  setAppLoading: Dispatch<SetStateAction<boolean>>;
}
