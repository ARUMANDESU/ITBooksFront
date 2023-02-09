import React, { useEffect } from "react";
import { Container, Wrap } from "@chakra-ui/react";
import BookCompHmPg from "../components/BookCompHmPg";
import { useSearchParams } from "react-router-dom";
import { observer } from "mobx-react";
import bookStore from "../stores/BookStore";

const CategoryPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.toString());
    useEffect(() => {
        bookStore.getBooks(100, searchParams.toString());
    }, [searchParams]);

    return (
        <Container maxW="95%" centerContent>
            <Wrap spacing="2%">
                {bookStore.books.map((book) => (
                    <BookCompHmPg book={book} key={book._id} />
                ))}
            </Wrap>
        </Container>
    );
};

export default observer(CategoryPage);
