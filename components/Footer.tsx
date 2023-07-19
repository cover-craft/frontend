import { Flex, Text } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Flex flexDirection={"column"} bottom={0} width={"100%"} gap={1} bg={"#e9e9e9"} h={"150px"}>
            <Text color={"gray"} size={"0.8rem"} mt={"auto"} p={5}>
                COVER CRAFT
                <br />
                팀장: 김현빈
                <br />
                dkstjswjd83@naver.com
                <br />ⓒ COVER CRAFT ALL RIGHTS RESERVED.
            </Text>
        </Flex>
    );
}
