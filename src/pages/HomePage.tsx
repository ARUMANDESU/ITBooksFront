import React, { useEffect } from "react";
import { observer } from "mobx-react";
import BookStore from "../stores/BookStore";
import Book from "../components/Book";

const HomePage = observer(() => {
    const bookstore = BookStore;

    useEffect(() => {
        bookstore.getBooks();
    }, []);

    return (
        <div>
            {bookstore.books.map((book) => (
                <Book key={book._id} image={book.image} title={book.title} />
            ))}
        </div>
    );
});

export default HomePage;
