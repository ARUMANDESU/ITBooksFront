import React from "react";
import {
    Box,
    Flex,
    Heading,
    Link,
    Spacer,
    Stack,
    Text,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import SearchComp from "./SearchComp";
import AccountComp from "./AccountComp";
import ColorModeComp from "./ColorModeComp";

const NavBar = () => {
    return (
        <Box bg="#000000" w="100%" p={4} color="white">
            <Flex minWidth="max-content" alignItems="center" gap="2">
                <Box p="2">
                    <Link as={ReachLink} to="/home">
                        <Heading size="md">ITBooks</Heading>
                    </Link>
                </Box>
                <Box ml="4.5%">
                    <Stack direction={["column", "row"]} spacing="34px">
                        <Link as={ReachLink} to="/home">
                            <Text>Домой</Text>
                        </Link>
                    </Stack>
                </Box>
                <Spacer />
                <ColorModeComp />
                <SearchComp />
                <AccountComp />
            </Flex>
        </Box>
    );
};

export default NavBar;
