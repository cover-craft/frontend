import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import Header from "./Header";
import { useCallback, useEffect, useState, useRef } from "react";
import ImageSection from "./ImageSection";
import { useMediaQuery } from "@chakra-ui/react";

const Home = () => {
    const [scrollY, setScrollY] = useState(0);
    const windowHeight = useRef(100);
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
                    right={"2rem"}
                    colorScheme="purple"
                    fontSize={"xl"}
                    fontWeight={"medium"}
                    p="1.5rem"
                    onClick={() => (location.href = "./create")}
                >
                    이미지 생성하기
                </Button>
            </Flex>
        </>
    );
};

const DescriptionSection = () => {
    const [isSmallerThan800] = useMediaQuery("(max-width: 800px)", {
        ssr: true,
        fallback: false,
    });
    const [isSmallerThan400] = useMediaQuery("(max-width: 400px)", {
        ssr: true,
        fallback: false,
    });
    return (
        <Flex
            flexDir={isSmallerThan800 ? "column-reverse" : "row"}
            minHeight={"100vh"}
            py={"15vh"}
            background={"gray.100"}
            gap={10}
            px={10}
        >
            <Flex justifyContent="right" flex={1} height={"70vh"}>
                <video style={{ borderRadius: "10px" }} className="video" src="./video/cover-craft.mov" autoPlay muted loop></video>
            </Flex>
            <Flex flex={1} flexDir={"column"}>
                <Heading fontSize={isSmallerThan400 ? "3xl" : "5xl"}>원하는 이미지를</Heading>
                <Heading fontSize={isSmallerThan400 ? "3xl" : "5xl"}>
                    <span style={{ color: "#6B00E5" }}>COVER CRAFT</span>로 완성
                </Heading>
                <Text mt={5} color={"gray"}>
                    생성한 이미지로 더 전문가와 함께 섬세한 작업을 하실 수 있습니다.
                </Text>
            </Flex>
        </Flex>
    );
};

export default Home;
