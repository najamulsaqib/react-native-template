import {TMongoCommon} from '../types';

export interface IUser extends TMongoCommon {
  name: string;
  email: string;
  profile_pic?: string;
  role: string;
}

export interface ILoginResponse {
  success: boolean;
  user: IUser;
  message: string;
  token?: string;
}
