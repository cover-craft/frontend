import React, { useState } from "react";
import Head from "next/head";
import RootLayout from "../components/RootLayout";
import Header from "../components/Header";
import { Flex } from "@chakra-ui/react";

export default function Home() {
    return (
        <Flex flex={"column"}>
            <Header />
        </Flex>
    );
}
