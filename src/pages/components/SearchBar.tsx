import React, { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/debounce";
import axios from "axios";
import { IBook, url } from "../../models/types";
import { Link } from "react-router-dom";

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const [books, setBooks] = useState([] as IBook[]);
    const debounced = useDebounce(search);
    useEffect(() => {
        if (debounced.length > 3) {
            const data = { payload: debounced };
            axios.post(`${url}/book/search`, data).then((res) => {
                setBooks(res.data);
            });
        }
    }, [debounced]);
    return (
        <div>
            <input
                type="search"
                placeholder="Search"
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            />
            <div style={{ overflowY: "scroll", height: "250px" }}>
                {books.map((book) => (
                    <>
                        <Link to={`/book/${book._id}`}>
                            <h5>{book.title}</h5>
                        </Link>
                    </>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;
