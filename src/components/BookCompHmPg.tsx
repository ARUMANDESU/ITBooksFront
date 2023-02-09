import React from "react";
import { IBook } from "../models/types";
import { Link } from "react-router-dom";
import { Box, Image, Text, WrapItem } from "@chakra-ui/react";

const BookCompHmPg = ({ book }: { book: IBook }) => {
    return (
        <WrapItem width="10%" height="100%">
            <Link to={`/book/${book._id}`}>
                <Image
                    src={book.image}
                    alt={book.title}
                    objectFit="fill"
                    width="250px"
                    height="290px"
                />
                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                >
                    {book.title}
                </Box>
            </Link>
        </WrapItem>
    );
};

export default BookCompHmPg;
