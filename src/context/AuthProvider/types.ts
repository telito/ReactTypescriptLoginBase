export interface IUser{
    account?: string;
    token?: string;
}

export interface IContext extends IUser{
    authenticate: (account: string, password: string) => Promise<void>;
    logout: () => void;
}

export interface IAuthProvider{
    children: JSX.Element;
}