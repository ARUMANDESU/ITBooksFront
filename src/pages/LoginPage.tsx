import React from "react";
import { userStore } from "../stores/UserStore";

const LoginPage = () => {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        await userStore.login({
            username: data.get("username") as string,
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
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="password"
                    placeholder="password"
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
