export interface IPrices {
  pre?: number;
  pos?: number;
  "1k"?: number;
}

export interface IUserContext {
  isSigned: boolean;
  setIsSigned: (data: IUser | undefined) => void;
}

export interface IUser {
  accessToken: string;
  email: string;
  id: number;
  roles: string[];
  type: string;
  username: string;
}

export interface ICompany {
  company?: string,
  quantity?: number,
  prices?: IPrices
}
