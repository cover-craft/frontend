import { Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const ButtonActive = () => {
    const [active, setActive] = useState(false);
    return <Button colorScheme={active ? "purple" : "gray"}>로그인</Button>;
};

export default ButtonActive;
