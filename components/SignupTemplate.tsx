import { Flex, Heading, Center, Stack, Input, Link, Button } from "@chakra-ui/react";
import ProgressBar from "./ProgressBar";
const SignupTemplate = () => {
    return (
        <Flex mt={"80px"} direction={"column"} flex={1} maxW={"500px"} mx="auto">
            <Center flexDir={"column"} py={"2rem"}>
                <Heading fontSize={"2xl"}>회원가입</Heading>
            </Center>
            <Stack>
                <ProgressBar
                    steps={[
                        { title: "약관동의", template: <>약관동의</> },
                        { title: "개인정보 입력", template: <>개인정보 입력</> },
                    ]}
                    onComplete={() => alert("완료 되었습니다.")}
                />
            </Stack>
        </Flex>
    );
};

export default SignupTemplate;
