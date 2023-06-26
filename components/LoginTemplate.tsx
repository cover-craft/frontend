import { Flex, Heading, Center, Stack, Input, Link } from "@chakra-ui/react";
import PasswordInput from "./PasswordInput";
import ButtonActive from "./ButtonActive";
import { useMediaQuery } from "@chakra-ui/react";

const Login = () => {
    const [isSmallerThan800] = useMediaQuery("(max-width: 800px)", {
        ssr: true,
        fallback: false,
    });

    const [isSmallerThan500] = useMediaQuery("(max-width: 500px", {
        ssr: true,
        fallback: false,
    });

    return (
        <Flex h={"100vh"}>
            <Flex mt={"80px"} direction={"column"} flex={1} maxW={"500px"} mx="auto">
                <Center flexDir={"column"} py={"2rem"}>
                    <Heading fontSize={"2xl"}>로그인</Heading>
                </Center>
                <Stack px={isSmallerThan500 ? "1rem" : "5rem"} my={"1rem"}>
                    <Input variant="outline" placeholder="Enter id" />
                    <PasswordInput />
                    <ButtonActive />
                    <Link color="gray.500" fontSize={"sm"} mx="auto">
                        아이디/비밀번호 찾기
                    </Link>
                </Stack>
            </Flex>

            <Flex display={isSmallerThan800 ? "none" : ""} flex={1} background={"purple.100"}></Flex>
        </Flex>
    );
};

export default Login;
