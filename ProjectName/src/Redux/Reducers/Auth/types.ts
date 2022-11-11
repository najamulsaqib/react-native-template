interface TUser extends TMongoCommon {
  name: string;
  role: string;
}

interface TMongoCommon {
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type TAuth = {
  isLoggedIn: boolean;
  user: TUser | null;
  token: string | null;
};
