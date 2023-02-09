export interface IUserStore {
    id: number;
    email: string;
    roles: String[];
    avatar_url: string;
    username: string;
    loggedIn: boolean;
}

export interface IBook {
    _id: string;
    title: string;
    ISBN: string;
    subtitle: string;
    image: string;
    url: string;
    description: string;
    author: string;
    publisher: string;
    published: number;
    pages: number;
    language: string;
}

export const url = "https://i-tbooks.vercel.app";
