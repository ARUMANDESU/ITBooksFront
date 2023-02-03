import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<HomePage />} />
                <Route path={"/book/:id"} element={<BookPage />} />
            </Routes>
        </>
    );
}

export default App;
