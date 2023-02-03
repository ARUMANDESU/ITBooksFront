import React from "react";
import { IBook } from "../models/types";
import { Image } from "mui-image";
import { Typography } from "@mui/material";

const BookSearchComp = ({ book }: { book: IBook }) => {
    return (
        <div style={{ display: "flex" }}>
            <div>
                <Image src={book.image} width={100} height={160} />
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                }}
            >
                <Typography variant="h6">{book.title}</Typography>
                <Typography variant="h6">{book.subtitle}</Typography>
            </div>
        </div>
    );
};

export default BookSearchComp;
