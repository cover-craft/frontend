import Header from "./Header";
import { Flex, Stack, IconButton, Text, Button, Center, Input, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";

export type Form = {
    gender: null | string;
    genre: null | string;
    background: null | string;
    color: null | string;
    clothes: null | string;
};

interface props {
    onClick?: (form: Form, prompt: string) => void;
}

const Create = (props: props) => {
    const [form, setForm] = useState<Form>({ gender: null, genre: null, background: null, color: null, clothes: null });
    const [prompt, setPrompt] = useState<string>("");
    const genreList = [
        { key: "fantasy", value: "판타지" },
        { key: "romance", value: "로맨스" },
        { key: "sf", value: "SF" },
        { key: "thriller", value: "스릴러" },
    ];
    const backgroundList = [
        { key: "palace", value: "궁전" },
        { key: "bedroom", value: "침실" },
        { key: "flower", value: "꽃" },
        { key: "city", value: "도시" },
        { key: "outside", value: "야외" },
        { key: "inside", value: "실내" },
    ];
    const colorList = [
        { key: "black", value: "검정" },
        { key: "brown", value: "갈색" },
        { key: "white", value: "흰색" },
        { key: "pink", value: "분홍색" },
        { key: "red", value: "빨간색" },
        { key: "yellow", value: "노란색" },
        { key: "green", value: "초록색" },
        { key: "blue", value: "파란색" },
        { key: "purple", value: "보라색" },
        { key: "gray", value: "회색" },
    ];
    const clothesList = [
        { key: "tee shirt", value: "티셔츠" },
        { key: "suit", value: "정장" },
        { key: "dress", value: "드레스" },
        { key: "military", value: "밀리터리" },
        { key: "armor", value: "갑옷" },
    ];
    const genderList = [
        { key: "man", value: "남자" },
        { key: "woman", value: "여자" },
    ];
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
                                key={item.key}
                                onClick={() => setForm({ ...form, ["gender"]: item.key })}
                                colorScheme={form["gender"] === item.key ? "purple" : "gray"}
                                borderRadius={"full"}
                                width={"5rem"}
                                height={"5rem"}
                                variant="outline"
                                icon={
                                    item.value === "남자" ? (
                                        <AiOutlineMan color={form["gender"] === item.key ? "#8b00ff" : "gray"} size={"2rem"} />
                                    ) : (
                                        <AiOutlineWoman color={form["gender"] === item.key ? "#8b00ff" : "gray"} size={"2rem"} />
                                    )
                                }
                                aria-label={item.value}
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
                                colorScheme={form["genre"] === item.key ? "purple" : "gray"}
                                variant={"outline"}
                                onClick={() => setForm({ ...form, ["genre"]: item.key })}
                            >
                                {item.value}
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
                                onClick={() => setForm({ ...form, ["background"]: item.key })}
                                colorScheme={form["background"] === item.key ? "purple" : "gray"}
                            >
                                {item.value}
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
                                onClick={() => setForm({ ...form, ["color"]: item.key })}
                                colorScheme={form["color"] === item.key ? "purple" : "gray"}
                            >
                                {item.value}
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
                                onClick={() => setForm({ ...form, ["clothes"]: item.key })}
                                colorScheme={form["clothes"] === item.key ? "purple" : "gray"}
                            >
                                {item.value}
                            </Button>
                        ))}
                    </SimpleGrid>
                </Stack>
                <Stack className="title-input">
                    <Text fontSize={"xl"}>제목</Text>
                    <Input
                        variant="outline"
                        placeholder="작품 제목을 입력해주세요."
                        focusBorderColor="purple.200"
                        onChange={(e) => setPrompt(e.target.value)}
                    />
                </Stack>
                <Button colorScheme={"purple"} onClick={() => props.onClick(form, prompt)}>
                    제작하기
                </Button>
            </Flex>
        </>
    );
};

export default Create;
