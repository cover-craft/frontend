import { Button, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import banner1 from "../public/images/home/home_image_banner1";

const Home = () => {
    return (
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
    );
};

const ImageSection = () => {
    const reversed_banner = banner1.reverse();
    return (
        <Flex flexDir={"column"} height={"100vh"} gap={10} bg="black">
            <Flex gap={10} mt={"auto"}>
                {banner1.map((img, index) => {
                    return <Image key={index} unoptimized={true} src={img} alt={"생성 이미지 예시"} width={180}></Image>;
                })}
            </Flex>
            <Flex gap={10}>
                {reversed_banner.map((img, index) => {
                    return <Image key={index} unoptimized={true} src={img} alt={"생성 이미지 예시"} width={180}></Image>;
                })}
            </Flex>
        </Flex>
    );
};

const DescriptionSection = () => {
    return <Flex flexDir={"column"} height={"100vh"} background={"purple.200"} py={80}></Flex>;
};

export default Home;