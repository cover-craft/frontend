import { Button, Flex, Text } from "@chakra-ui/react";
import Header from "./Header";
import { useCallback, useEffect, useState, useRef } from "react";
import ImageSection from "./ImageSection";

const Home = () => {
    const [scrollY, setScrollY] = useState(0);
    const windowHeight = useRef(0);
    const onScroll = useCallback((event) => {
        const { scrollY } = window;
        setScrollY(scrollY);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", onScroll, { passive: true });
        windowHeight.current = window.innerHeight;
    });
    return (
        <>
            <Header darkMode={scrollY >= windowHeight.current ? false : true} />
            <Flex flexDir="column">
                <ImageSection />
                <DescriptionSection />
                <Button
                    position={"fixed"}
                    zIndex={1}
                    bottom={"1rem"}
                    right={"1rem"}
                    colorScheme="purple"
                    fontSize={"xl"}
                    fontWeight={"medium"}
                    p="1.5rem"
                >
                    이미지 생성하기
                </Button>
            </Flex>
        </>
    );
};

const DescriptionSection = () => {
    return <Flex flexDir={"column"} height={"100vh"} py={80}></Flex>;
};

export default Home;
