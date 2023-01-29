export interface IUserStore {
    id: number,
    email: string,
    username: string,
    loggedIn:boolean,

}

export const url = "http://localhost:4000"