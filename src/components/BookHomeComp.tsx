import React from "react";
import { IBook } from "../models/types";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Image } from "mui-image";
const BookHomeComp = ({ book }: { book: IBook }) => {
    return (
        <Grid container item xs={2.5} spacing={1} display="flex">
            <Link to={`/book/${book._id}`} key={book._id}>
                <Image
                    src={book.image}
                    alt={book.title}
                    fit="contain"
                    showLoading={true}
                    height="228px"
                    width="325px"
                    duration={500}
                />
                <Typography variant="subtitle1" align="center">
                    {book.title}
                </Typography>
            </Link>
        </Grid>
    );
};

export default BookHomeComp;
