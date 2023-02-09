import React, { useEffect, useRef, useState } from "react";
import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Input,
    StackDivider,
    useDisclosure,
    VStack,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useDebounce } from "../hooks/debounce";
import axios from "axios";
import BookSearchComp from "./BookSearchComp";
import { IBook } from "../models/types";

const SearchComp = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef<HTMLButtonElement>(null);
    const [books, setBooks] = useState([] as IBook[]);
    const [search, setSearch] = useState("");
    const debounced = useDebounce(search);

    useEffect(() => {
        if (debounced.length > 3) {
            const data = { payload: debounced };
            axios
                .post(
                    `${process.env.REACT_APP_BACKEND_BASE_URL}/book/search`,
                    data
                )
                .then((res) => {
                    setBooks(res.data);
                })
                .catch((err) => console.error(err));
        }
    }, [debounced]);

    return (
        <Box mx="1%">
            <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
                <BsSearch />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader mt="7">
                        <Input
                            placeholder="Search ... "
                            colorScheme="teal"
                            onChange={(e) => {
                                setSearch(e.target.value);
                            }}
                        />
                    </DrawerHeader>
                    <DrawerBody>
                        <VStack
                            divider={<StackDivider borderColor="gray.200" />}
                            spacing={4}
                            align="stretch"
                        >
                            {books.map((book) => (
                                <BookSearchComp key={book._id} book={book} />
                            ))}
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default SearchComp;
