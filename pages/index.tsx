import React from "react";
import Header from "../components/Header";
import { Flex } from "@chakra-ui/react";

export default function Home() {
    return (
        <Flex flex={"column"}>
            <Header />
        </Flex>
    );
}
