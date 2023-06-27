import banner1 from "../public/images/home/home_image_banner1";
import { Flex } from "@chakra-ui/react";
import Image from "next/image";
const ImageSection = () => {
    const reversed_banner = banner1.reverse();
    return (
        <Flex flexDir={"column"} height={"100vh"} gap={10} bg="black">
            <Flex gap={10} mt={"auto"}>
                {banner1.map((img, index) => {
                    return <Image key={index} src={img} alt={"생성 이미지 예시"} width={200}></Image>;
                })}
            </Flex>
            <Flex gap={10}>
                {reversed_banner.map((img, index) => {
                    return <Image key={`${img}_${index}`} src={img} alt={"생성 이미지 예시"} width={130} loading="lazy"></Image>;
                })}
            </Flex>
        </Flex>
    );
};
export default ImageSection;
