import React, { useEffect } from "react";
import { observer } from "mobx-react";
import BookStore from "../stores/BookStore";
import BookHomeComp from "../components/BookHomeComp";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const HomePage = observer(() => {
    const bookstore = BookStore;

    useEffect(() => {
        bookstore.getBooks();
    }, []);

    return (
        <div>
            <Grid
                container
                spacing={1}
                columnSpacing={{ xs: 3, sm: 3, md: 3 }}
                columns={16}
                direction="row"
                justifyContent="center"
                alignItems="center"
                px="3%"
                pt="5%"
            >
                {bookstore.books.map((book) => (
                    <BookHomeComp book={book} key={book._id} />
                ))}
            </Grid>
        </div>
    );
});

export default HomePage;
