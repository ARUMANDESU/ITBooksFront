import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NavBar from "./components/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import CategoryPage from "./pages/CategoryPage";
import BookPage from "./pages/BookPage";

function App() {
    return (
        <ChakraProvider>
            <NavBar />
            <Routes>
                <Route path={"/"} element={<Navigate to="/home" />} />
                <Route path={"/home"} element={<HomePage />} />
                <Route path={"/book/:id"} element={<BookPage />} />
                <Route path={"/lists"} element={<CategoryPage />} />
                <Route path={"/login"} element={<LoginPage />} />
                <Route path={"/register"} element={<RegisterPage />} />
            </Routes>
        </ChakraProvider>
    );
}

export default App;
