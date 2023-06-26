import { Flex, Heading, Center, Stack, Text, Checkbox, Box } from "@chakra-ui/react";
import ProgressBar from "./ProgressBar";
import { USE_AGREE } from "../public/agree/use_agree";
const SignupTemplate = () => {
    return (
        <Flex mt={"80px"} direction={"column"} flex={1} maxW={"500px"} mx="auto">
            <Center flexDir={"column"} py={"2rem"}>
                <Heading fontSize={"2xl"}>회원가입</Heading>
            </Center>
            <Stack>
                <ProgressBar
                    steps={[
                        { title: "약관동의", template: <AgreeToTerms /> },
                        { title: "개인정보 입력", template: <>개인정보 입력</> },
                    ]}
                    onComplete={() => alert("완료 되었습니다.")}
                />
            </Stack>
        </Flex>
    );
};

export default SignupTemplate;

const AgreeToTerms = () => {
    return (
        <Flex flexDir={"column"}>
            <Center my={10}>
                <Heading fontSize={"xl"}>약관 동의 및 정보활용 동의</Heading>
            </Center>
            <Stack gap={3} my={10}>
                <Checkbox colorScheme="purple">서비스 이용약관 동의 (필수)</Checkbox>
                <Box padding="1rem" display={"block"} borderRadius={5} border={"1px solid"} borderColor={"gray.300"}>
                    <Text h={"10rem"} overflowY="auto">
                        {USE_AGREE}
                    </Text>
                </Box>
            </Stack>
            <Stack gap={3} my={5}>
                <Checkbox colorScheme="purple">개인정보 수집 및 이용 동의 (필수)</Checkbox>
                <Box padding="1rem" display={"block"} borderRadius={5} border={"1px solid"} borderColor={"gray.300"}>
                    <Text h={"10rem"} overflowY="auto">
                        {USE_AGREE}
                    </Text>
                </Box>
            </Stack>
        </Flex>
    );
};
