import React, { useEffect, useRef, useState } from "react";
import { useDebounce } from "../../hooks/debounce";
import axios from "axios";
import { IBook, url } from "../../models/types";
import { Link } from "react-router-dom";
import { TextField, Typography } from "@mui/material";
import BookSearchComp from "../../components/BookSearchComp";

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const [searchResultH, setSearchResultH] = useState(true);
    const resultCompRef = useRef<HTMLDivElement | null>(null);
    const inputCompRef = useRef<HTMLInputElement | null>(null);
    const [books, setBooks] = useState([] as IBook[]);
    const debounced = useDebounce(search);
    const onClickHandler = () => {
        setSearchResultH(false);
    };
    const handleClickOutside = (event: MouseEvent) => {
        if (
            resultCompRef.current &&
            inputCompRef.current &&
            !resultCompRef.current.contains(event.target as Node) &&
            !inputCompRef.current.contains(event.target as Node)
        ) {
            setSearchResultH(true);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (debounced.length > 3) {
            const data = { payload: debounced };
            axios
                .post(`${url}/book/search`, data)
                .then((res) => {
                    setBooks(res.data);
                })
                .catch((err) => console.error(err));
        }
    }, [debounced]);
    return (
        <div>
            <TextField
                type="search"
                placeholder="Search"
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
                color="info"
                onFocus={onClickHandler}
                inputRef={inputCompRef}
            />
            <div
                style={{ overflowY: "scroll", height: "250px" }}
                hidden={searchResultH}
                ref={resultCompRef}
                className="suggestion"
            >
                {books.length > 0 ? (
                    books.map((book) => (
                        <>
                            <Link to={`/book/${book._id}`}>
                                <BookSearchComp book={book} />
                            </Link>
                        </>
                    ))
                ) : (
                    <Typography variant="h3"> No result</Typography>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
