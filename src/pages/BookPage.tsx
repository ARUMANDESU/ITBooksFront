import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import bookStore from "../stores/BookStore";
import { observer } from "mobx-react";

const BookPage = () => {
    const { id } = useParams();
    useEffect(() => {
        bookStore.getOneBookByID(id!);
    }, []);
    return (
        <div>
            <img src={bookStore.image} alt="book cover" />
            <h2>{bookStore.title}</h2>
            <h3>
                Author{bookStore.author.split(", ").length > 0 ? "s" : ""} :{" "}
                {bookStore.author}
            </h3>
            <h3>Publisher : {bookStore.publisher}</h3>
            <h3>Published : {bookStore.published}</h3>
            <h3>Pages : {bookStore.pages}</h3>
            <h3>Language : {bookStore.language}</h3>
            <p>{bookStore.description}</p>
        </div>
    );
};

export default observer(BookPage);
