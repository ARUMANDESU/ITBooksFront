import React, { useEffect } from "react";
import { observer } from "mobx-react";
import BookStore from "../stores/BookStore";
import Book from "../components/Book";
import { Link } from "react-router-dom";

const HomePage = observer(() => {
    const bookstore = BookStore;

    useEffect(() => {
        bookstore.getBooks();
    }, []);

    return (
        <div>
            {bookstore.books.map((book) => (
                <Link to={`/book/${book._id}`} key={book._id}>
                    <Book image={book.image} title={book.title} />
                </Link>
            ))}
        </div>
    );
});

export default HomePage;
