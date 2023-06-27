import banner1 from "../public/images/home/home_image_banner1";
import { Flex } from "@chakra-ui/react";
import Image from "next/image";
const ImageSection = () => {
    return (
        <Flex flexDir={"column"} height={"100vh"} gap={10} bg="black">
            <Flex gap={10} mt={"auto"}>
                {banner1.map((img, index) => {
                    return <Image key={index} src={img} alt={"생성 이미지 예시"} width={180} unoptimized></Image>;
                })}
            </Flex>
            <Flex gap={10}>
                {banner1.map((img, index) => {
                    return (
                        <Image key={`${img}_${index}`} src={img} alt={"생성 이미지 예시"} width={130} loading="lazy" unoptimized></Image>
                    );
                })}
            </Flex>
        </Flex>
    );
};
export default ImageSection;
