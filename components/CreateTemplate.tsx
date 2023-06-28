import Header from "./Header";
import { Flex, HStack, Stack, IconButton, Text, ButtonGroup, Button, Center, Input, SimpleGrid } from "@chakra-ui/react";
import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";

const Create = () => {
    const genreList = ["판타지", "로맨스", "SF", "스릴러"];
    const backgroundList = ["궁전", "침실", "꽃", "도시", "야외", "실내"];
    const colorList = ["검정", "갈색", "흰색", "분홍색", "빨간색", "노란색", "초록색", "파란색", "보라색", "회색"];
    const clothList = ["티셔츠", "정장", "드레스", "밀리터리", "갑옷"];
    return (
        <>
            <Header></Header>
            <Flex direction="column" gap={10} mt={150} mb={100} width={"90%"} maxW={"500px"} mx={"auto"}>
                <Stack className="gender">
                    <Center>
                        <Text fontSize={"xl"}>캐릭터 성별</Text>
                    </Center>
                    <Center gap={2}>
                        <IconButton
                            borderRadius={"full"}
                            width={"5rem"}
                            height={"5rem"}
                            variant="outline"
                            icon={<AiOutlineMan color="gray" size={"2rem"} />}
                            aria-label={"man"}
                        ></IconButton>
                        <IconButton
                            borderRadius={"full"}
                            width={"5rem"}
                            height={"5rem"}
                            variant="outline"
                            icon={<AiOutlineWoman color="gray" size={"2rem"} />}
                            aria-label={"man"}
                        ></IconButton>
                    </Center>
                </Stack>
                <Stack className="genre">
                    <Text fontSize={"xl"}>장르</Text>
                    <SimpleGrid gap={2} columns={[2, 4]}>
                        {genreList.map((item, index) => (
                            <Button key={index} variant={"outline"}>
                                {item}
                            </Button>
                        ))}
                    </SimpleGrid>
                </Stack>
                <Stack className="background">
                    <Text fontSize={"xl"}>배경</Text>
                    <SimpleGrid gap={2} columns={[2, 3]}>
                        {backgroundList.map((item, index) => (
                            <Button key={index} variant={"outline"}>
                                {item}
                            </Button>
                        ))}
                    </SimpleGrid>
                </Stack>
                <Stack className="color">
                    <Text fontSize={"xl"}>색상</Text>
                    <SimpleGrid gap={2} columns={[2, 4]}>
                        {colorList.map((item, index) => (
                            <Button key={index} variant={"outline"}>
                                {item}
                            </Button>
                        ))}
                    </SimpleGrid>
                </Stack>
                <Stack className="cloth-style">
                    <Text fontSize={"xl"}>옷 스타일</Text>
                    <SimpleGrid gap={2} columns={[2, 5]}>
                        {clothList.map((item, index) => (
                            <Button key={index} variant={"outline"}>
                                {item}
                            </Button>
                        ))}
                    </SimpleGrid>
                </Stack>
                <Stack className="title-input">
                    <Text fontSize={"xl"}>제목</Text>
                    <Input variant="outline" placeholder="작품 제목을 입력해주세요." focusBorderColor="purple.200" />
                </Stack>
                <Button colorScheme={"purple"}>제작하기</Button>
            </Flex>
        </>
    );
};

export default Create;
