import { Flex, Menu, MenuItem, Heading, IconButton, MenuButton, MenuList } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

interface props {
    darkMode?: boolean;
}

const Header = ({ darkMode = false }: props) => {
    return (
        <Flex
            w="100%"
            background={darkMode ? "black" : "white"}
            zIndex={1}
            pos={"fixed"}
            top={0}
            p={"0.8rem"}
            justifyContent={"space-between"}
        >
            <Heading color={darkMode ? "white" : "black"} onClick={() => (window.location.href = "./")}>
                COVER CRAFT
            </Heading>
            <Menu>
                <MenuButton
                    as={IconButton}
                    icon={<HamburgerIcon color={darkMode ? "white" : "black"} />}
                    aria-label="Options"
                    variant={darkMode ? "none" : "outline"}
                />
                <MenuList>
                    <MenuItem onClick={() => (window.location.href = "./login")}>로그인</MenuItem>
                    <MenuItem onClick={() => (window.location.href = "./signup")}>회원가입</MenuItem>
                    <MenuItem onClick={() => (window.location.href = "./credit")}>요금제</MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    );
};
export default Header;
