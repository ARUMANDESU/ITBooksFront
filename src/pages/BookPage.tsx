import React, { useEffect } from "react";
import { useParams, Link as ReachLink } from "react-router-dom";
import { observer } from "mobx-react";
import {
    Box,
    Button,
    Grid,
    GridItem,
    HStack,
    Image,
    Link,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Tr,
} from "@chakra-ui/react";
import axios from "axios";
import bookStore from "../stores/BookStore";

const BookPage = () => {
    const { id } = useParams();

    useEffect(() => {
        bookStore.getOneBookByID(id).then(() => {
            console.log(bookStore);
        });
    }, [id]);
    const LikeBtnHandler = async () => {
        await axios
            .post(
                `${process.env.REACT_APP_BACKEND_BASE_URL}/user/addMovie/${id}`
            )
            .then((res) => {
                console.log(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <div>
            <HStack>
                <Box width="1500px">
                    <Image
                        src={bookStore.image}
                        alt={bookStore.title}
                        width="100%"
                        height="100%"
                    />
                </Box>
                <Box height="100%">
                    <Text fontSize="4xl">{bookStore.title} </Text>

                    <TableContainer py="2%">
                        <Table>
                            <Tbody>
                                <Tr>
                                    <Td>Автор</Td>
                                    <Td>
                                        <b>
                                            <Link
                                                as={ReachLink}
                                                to={`/lists/?author=${bookStore.author}`}
                                            >
                                                {bookStore.author}
                                            </Link>
                                        </b>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>Издатель</Td>
                                    <Td>
                                        <b>
                                            <Link
                                                as={ReachLink}
                                                to={`/lists/?publisher=${bookStore.publisher}`}
                                            >
                                                {bookStore.publisher}
                                            </Link>
                                        </b>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>Год</Td>
                                    <Td>
                                        <b>
                                            <Link
                                                as={ReachLink}
                                                to={`/lists/?published=${bookStore.published}`}
                                            >
                                                {bookStore.published}
                                            </Link>
                                        </b>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>Страницы</Td>
                                    <Td>
                                        <b>{bookStore.pages}</b>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>Язык</Td>
                                    <Td>
                                        <b>{bookStore.language}</b>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>ISBN-13</Td>
                                    <Td>
                                        <b>{bookStore.ISBN}</b>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                    <Box>
                        <Text fontSize="3xl">Описание :</Text>
                        <br />
                        <Text fontSize="1xl">{bookStore.description}</Text>
                    </Box>
                    <Box
                        as="button"
                        borderRadius="md"
                        bg="tomato"
                        color="white"
                        px={4}
                        my={5}
                        h={12}
                        w={36}
                        onClick={() => {
                            window.open(
                                `https://itbook.store/go/buy/${bookStore.ISBN}`,
                                "_blank"
                            );
                        }}
                    >
                        Купить
                    </Box>
                </Box>
            </HStack>
        </div>
    );
};

export default observer(BookPage);
