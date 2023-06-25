import { Flex, Menu, MenuItem, Heading, IconButton, MenuButton, MenuList } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
const Header = () => {
    return (
        <Flex w="100%" background="white" zIndex={1} pos={"fixed"} top={0} p={"0.8rem"} justifyContent={"space-between"}>
            <Heading>CODE CRAFT</Heading>
            <Menu>
                <MenuButton as={IconButton} icon={<HamburgerIcon />} aria-label="Options" variant="outline" />
                <MenuList>
                    <MenuItem onClick={() => (window.location.href = "/login")}>로그인</MenuItem>
                    <MenuItem onClick={() => (window.location.href = "/signup")}>회원가입</MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    );
};
export default Header;
