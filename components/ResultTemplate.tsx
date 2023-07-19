import Header from "./Header";
import { Button, Flex, Grid, GridItem, Heading, Image, SimpleGrid, Tag, Center, useMediaQuery } from "@chakra-ui/react";

interface ResultProps {
    imgUrl: string;
    prompt: string;
}

const ResultTemplate = ({ imgUrl, prompt }: ResultProps) => {
    const promptList = prompt && prompt.split(",");
    const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");
    return (
        <>
            <Header></Header>
            <Center>
                <Flex direction={isSmallerThan800 ? "column" : "row"} gap={10} pt={150} pb={100} mx={10}>
                    <Image src={`data:image/png;base64,${imgUrl}`} w={600} />
                    <Flex direction="column" gap={5}>
                        <Heading>선택한 옵션</Heading>
                        {promptList && (
                            <Flex flexDirection={"row"} gap={2}>
                                <Tag size={"md"} variant="subtle" colorScheme="purple">
                                    {promptList[0].toUpperCase()}
                                </Tag>
                                <Tag size={"md"} variant="subtle" colorScheme="purple">
                                    {promptList[1].toUpperCase()}
                                </Tag>
                                <Tag size={"md"} variant="subtle" colorScheme="purple">
                                    {promptList[2].toUpperCase()}
                                </Tag>
                                <Tag size={"md"} variant="subtle" colorScheme="purple">
                                    {promptList[3].toUpperCase()}
                                </Tag>
                                <Tag size={"md"} variant="subtle" colorScheme="purple">
                                    {promptList[4].toUpperCase()}
                                </Tag>
                            </Flex>
                        )}

                        {promptList && (
                            <Tag size={"md"} variant="outline" colorScheme="purple" flexWrap={"wrap"}>
                                {promptList[5].toUpperCase()}
                            </Tag>
                        )}

                        <Flex flex={1} gap={"5px"}>
                            <Button colorScheme={"purple"} flex={1} onClick={() => (location.href = "./credit")}>
                                다운로드
                            </Button>
                            <Button color={"purple.400"} variant="outline" flex={1}>
                                전문가에게 요청하기
                            </Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Center>
        </>
    );
};

export default ResultTemplate;
