import React from "react";
import { userStore } from "../stores/UserStore";
import { observer } from "mobx-react";

const RegisterPage = () => {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        await userStore.register({
            username: data.get("username") as string,
            email: data.get("email") as string,
            password: data.get("password") as string,
        });

        // eslint-disable-next-line no-restricted-globals
        location.assign("/");
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="username"
                    name="username"
                    autoComplete="username"
                    placeholder="username"
                />
                <input
                    type="text"
                    id="email"
                    name="email"
                    autoComplete="email"
                    placeholder="email"
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="password"
                    placeholder="password"
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default observer(RegisterPage);
