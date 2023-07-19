import { Flex, Heading, Center, Stack, Text, Checkbox, Box, Input, Button, Toast, useToast } from "@chakra-ui/react";
import ProgressBar from "./ProgressBar";
import { USE_AGREE } from "../public/agree/use_agree";
import Header from "./Header";
import { useState } from "react";
const SignupTemplate = () => {
    const toast = useToast();
    const [countOfCheck, setCountOfCheck] = useState<number>(0);
    return (
        <>
            <Header />
            <Flex mt={"80px"} direction={"column"} flex={1} maxW={"500px"} mx="auto">
                <Center flexDir={"column"} py={"2rem"}>
                    <Heading fontSize={"2xl"}>회원가입</Heading>
                </Center>
                <Stack>
                    <ProgressBar
                        steps={[
                            { title: "약관동의", template: <AgreeToTerms countOfCheck={countOfCheck} setCountOfCheck={setCountOfCheck} /> },
                            { title: "개인정보 입력", template: <InputSignupForm /> },
                        ]}
                        onClickNext={(step: 0 | 1) => {
                            switch (step) {
                                case 0:
                                    if (countOfCheck !== 2) {
                                        toast({ title: "필수 약관동의에 동의해주세요", status: "warning" });
                                        return false;
                                    } else return true;
                            }
                        }}
                        onComplete={() => alert("완료 되었습니다.")}
                    />
                </Stack>
            </Flex>
        </>
    );
};

export default SignupTemplate;

interface AgreeFormProps {
    countOfCheck: number;
    setCountOfCheck: (value: number) => void;
}
const AgreeToTerms = ({ countOfCheck, setCountOfCheck }: AgreeFormProps) => {
    return (
        <Flex flexDir={"column"}>
            <Center my={10}>
                <Heading fontSize={"xl"}>약관 동의 및 정보활용 동의</Heading>
            </Center>
            <Stack gap={3} my={10}>
                <Checkbox
                    colorScheme="purple"
                    onChange={(e) => (e.target.checked ? setCountOfCheck(countOfCheck + 1) : setCountOfCheck(countOfCheck - 1))}
                >
                    서비스 이용약관 동의 (필수)
                </Checkbox>
                <Box padding="1rem" display={"block"} borderRadius={5} border={"1px solid"} borderColor={"gray.300"}>
                    <Text h={"10rem"} overflowY="auto">
                        {USE_AGREE}
                    </Text>
                </Box>
            </Stack>
            <Stack gap={3} my={5}>
                <Checkbox
                    colorScheme="purple"
                    onChange={(e) => (e.target.checked ? setCountOfCheck(countOfCheck + 1) : setCountOfCheck(countOfCheck - 1))}
                >
                    개인정보 수집 및 이용 동의 (필수)
                </Checkbox>
                <Box padding="1rem" display={"block"} borderRadius={5} border={"1px solid"} borderColor={"gray.300"}>
                    <Text h={"10rem"} overflowY="auto">
                        {USE_AGREE}
                    </Text>
                </Box>
            </Stack>
        </Flex>
    );
};

const InputSignupForm = () => {
    return (
        <Flex flexDir={"column"} gap={10}>
            <Center my={10}>
                <Heading fontSize={"xl"}>회원정보 입력</Heading>
            </Center>
            <Stack>
                <Text>이메일</Text>
                <Flex>
                    <Input placeholder="이메일" focusBorderColor="purple.200" />
                    <Button colorScheme="purple" mx={"0.5rem"} fontWeight={"medium"}>
                        중복 확인
                    </Button>
                </Flex>
                <Text fontSize={"sm"} color={"purple.500"}>
                    사용가능한 이메일입니다.
                </Text>
            </Stack>
            <Stack>
                <Text>비밀번호 입력</Text>
                <Input placeholder="비밀번호" focusBorderColor="purple.200" />
                <Input placeholder="비밀번호 확인" focusBorderColor="purple.200" />
                <Text fontSize={"sm"} color={"red.500"}>
                    비밀번호는 8자 이상, 특수문자 1개이상으로 설정해주세요.
                </Text>
            </Stack>
            <Stack>
                <Text>닉네임</Text>
                <Input placeholder="닉네임" focusBorderColor="purple.200" />
                <Text fontSize={"sm"} color={"red.500"}>
                    닉네임은 2자 이상 50자 이내로 작성해주세요.
                </Text>
            </Stack>
            <Stack>
                <Text>전화번호</Text>
                <Input placeholder="01012341234" focusBorderColor="purple.200" />
                <Text fontSize={"sm"} color={"red.500"}>
                    '-'제외로 작성해주세요.
                </Text>
            </Stack>
        </Flex>
    );
};
