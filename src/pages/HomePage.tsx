import React, { ReactEventHandler, useEffect, useState } from "react";
import { observer } from "mobx-react";
import bookStore from "../stores/BookStore";
import BookCompHmPg from "../components/BookCompHmPg";
import { Container, Wrap } from "@chakra-ui/react";
import Pagination from "@mui/material/Pagination";
import ReactPaginate from "react-paginate";
import { Simulate } from "react-dom/test-utils";
import focus = Simulate.focus;

const HomePage = () => {
    let [page, setPage] = useState(1);
    const handleChange = (event: { selected: number }) => {
        const newOffset = (event.selected * 1) % 900;
        setPage(newOffset);
    };
    useEffect(() => {
        bookStore.getBooks(100, `page=${page}`);
        window.scrollTo(0, 0);
    }, [page]);

    return (
        <>
            <Container maxW="95%" centerContent>
                <Wrap spacing="2%">
                    {bookStore.books.map((book) => (
                        <BookCompHmPg book={book} key={book._id} />
                    ))}
                </Wrap>
                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handleChange}
                    pageRangeDisplayed={5}
                    pageCount={9}
                    previousLabel="< previous"
                />
            </Container>
        </>
    );
};

export default observer(HomePage);
