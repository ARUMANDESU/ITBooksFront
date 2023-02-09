import React from "react";
import { Box, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IBook } from "../models/types";

const BookSearchComp = ({ book }: { book: IBook }) => {
    return (
        <Box>
            <Link to={`/movie/${book._id}`}>
                <HStack height="150px">
                    <Box width="60%" height="100%">
                        <Image
                            src={book.image}
                            objectFit="fill"
                            width="100px"
                            height="150px"
                        />
                    </Box>
                    <Box width="100%">{book.title}</Box>
                </HStack>
            </Link>
        </Box>
    );
};

export default BookSearchComp;
