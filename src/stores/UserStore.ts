import { IUserStore, url } from "../models/types";
import { makeObservable, observable } from "mobx";
import { create, persist } from "mobx-persist";
import axios from "axios";

const userInitialState: IUserStore = {
    id: 0,
    email: "",
    username: "",
    avatar_url: "",
    roles: [],
    loggedIn: false,
};

export class UserStore {
    @persist("object") user: IUserStore;

    constructor() {
        this.user = userInitialState;
        makeObservable(this, {
            user: observable,
        });
    }

    setUser({ id, username, roles, email, avatar_url }: IUserStore) {
        this.user = {
            id,
            username,
            email,
            avatar_url,
            roles,
            loggedIn: true,
        };
    }

    removeUser() {
        this.user = userInitialState;
    }
    async register(data: {
        email: string;
        username: string;
        password: string;
    }) {
        await axios
            .post(
                `${process.env.REACT_APP_BACKEND_BASE_URL}/user/register`,
                data
            )
            .then((res) => {
                return res.data.successful;
            });
    }

    async login(data: { username: string; password: string }) {
        await axios
            .post(`${process.env.REACT_APP_BACKEND_BASE_URL}/user/login`, data)
            .then((res) => {
                this.setUser(res.data);
                return res.data.successful;
            });
    }
    logout() {
        this.removeUser();
    }
}

const hydrate = create({
    storage: localStorage,
});

export const userStore = new UserStore();

hydrate("user", userStore).then(() => {
    console.log("user has been hydrated");
});
