import Header from "./Header";
import { Flex, Stack, IconButton, Text, Button, Center, Input, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";

type Form = {
    gender: null | string;
    genre: null | string;
    background: null | string;
    color: null | string;
    clothes: null | string;
};

interface props {
    onClick?: () => void;
}

const Create = (props: props) => {
    const [form, setForm] = useState<Form>({ gender: null, genre: null, background: null, color: null, clothes: null });
    const genreList = ["판타지", "로맨스", "SF", "스릴러"];
    const backgroundList = ["궁전", "침실", "꽃", "도시", "야외", "실내"];
    const colorList = ["검정", "갈색", "흰색", "분홍색", "빨간색", "노란색", "초록색", "파란색", "보라색", "회색"];
    const clothesList = ["티셔츠", "정장", "드레스", "밀리터리", "갑옷"];
    const genderList = ["남자", "여자"];
    return (
        <>
            <Header></Header>
            <Flex direction="column" gap={10} mt={150} mb={100} width={"90%"} maxW={"500px"} mx={"auto"}>
                <Stack className="gender">
                    <Center>
                        <Text fontSize={"xl"}>캐릭터 성별</Text>
                    </Center>
                    <Center gap={2}>
                        {genderList.map((item) => (
                            <IconButton
                                key={item}
                                onClick={() => setForm({ ...form, ["gender"]: item })}
                                colorScheme={form["gender"] === item ? "purple" : "gray"}
                                borderRadius={"full"}
                                width={"5rem"}
                                height={"5rem"}
                                variant="outline"
                                icon={
                                    item === "남자" ? (
                                        <AiOutlineMan color={form["gender"] === item ? "#8b00ff" : "gray"} size={"2rem"} />
                                    ) : (
                                        <AiOutlineWoman color={form["gender"] === item ? "#8b00ff" : "gray"} size={"2rem"} />
                                    )
                                }
                                aria-label={item}
                            ></IconButton>
                        ))}
                    </Center>
                </Stack>
                <Stack className="genre">
                    <Text fontSize={"xl"}>장르</Text>
                    <SimpleGrid gap={2} columns={[2, 4]}>
                        {genreList.map((item, index) => (
                            <Button
                                key={index}
                                colorScheme={form["genre"] === item ? "purple" : "gray"}
                                variant={"outline"}
                                onClick={() => setForm({ ...form, ["genre"]: item })}
                            >
                                {item}
                            </Button>
                        ))}
                    </SimpleGrid>
                </Stack>
                <Stack className="background">
                    <Text fontSize={"xl"}>배경</Text>
                    <SimpleGrid gap={2} columns={[2, 3]}>
                        {backgroundList.map((item, index) => (
                            <Button
                                key={index}
                                variant={"outline"}
                                onClick={() => setForm({ ...form, ["background"]: item })}
                                colorScheme={form["background"] === item ? "purple" : "gray"}
                            >
                                {item}
                            </Button>
                        ))}
                    </SimpleGrid>
                </Stack>
                <Stack className="color">
                    <Text fontSize={"xl"}>색상</Text>
                    <SimpleGrid gap={2} columns={[2, 4]}>
                        {colorList.map((item, index) => (
                            <Button
                                key={index}
                                variant={"outline"}
                                onClick={() => setForm({ ...form, ["color"]: item })}
                                colorScheme={form["color"] === item ? "purple" : "gray"}
                            >
                                {item}
                            </Button>
                        ))}
                    </SimpleGrid>
                </Stack>
                <Stack className="clothes-style">
                    <Text fontSize={"xl"}>옷 스타일</Text>
                    <SimpleGrid gap={2} columns={[2, 5]}>
                        {clothesList.map((item, index) => (
                            <Button
                                key={index}
                                variant={"outline"}
                                onClick={() => setForm({ ...form, ["clothes"]: item })}
                                colorScheme={form["clothes"] === item ? "purple" : "gray"}
                            >
                                {item}
                            </Button>
                        ))}
                    </SimpleGrid>
                </Stack>
                <Stack className="title-input">
                    <Text fontSize={"xl"}>제목</Text>
                    <Input variant="outline" placeholder="작품 제목을 입력해주세요." focusBorderColor="purple.200" />
                </Stack>
                <Button colorScheme={"purple"} onClick={props.onClick}>
                    제작하기
                </Button>
            </Flex>
        </>
    );
};

export default Create;
