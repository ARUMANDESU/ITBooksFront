import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NavBar from "./pages/components/NavBar";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path={"/"} element={<HomePage />} />
                <Route path={"/book/:id"} element={<BookPage />} />
                <Route path={"/auth/login"} element={<LoginPage />} />
                <Route path={"/auth/register"} element={<RegisterPage />} />
            </Routes>
        </>
    );
}

export default App;
