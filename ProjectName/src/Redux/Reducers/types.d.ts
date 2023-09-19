import {IUser} from './Auth/actions.d';

interface TMongoCommon {
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type TAuth = {
  isLoggedIn: boolean;
  user: IUser | null;
  token: string | null;
};

export type TCallback<T> = (args: T) => void;

export interface ICommonResponse {
  success: boolean;
  message: string;
}
