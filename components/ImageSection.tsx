import banner1 from "../public/images/home/home_image_banner1";
import { Flex, Heading, Center, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";

const ImageSection = () => {
    return (
        <Flex flexDir={"column"} gap={8} bg="black" py={"2rem"}>
            <Flex height={"30vh"}>
                <Heading ml="auto" mr="5%" color={"white"} mt={"80px"}>
                    BOOK COVER IMAGE
                    <br />
                    <Text color={"purple.500"}>GENERATIVE AI.</Text>
                    <hr />
                </Heading>
            </Flex>
            <Flex mt={"auto"}>
                <Swiper
                    speed={1500}
                    style={{ width: "90%", zIndex: 0 }}
                    spaceBetween={10}
                    slidesPerView={"auto"}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                >
                    {banner1.map((img, index) => {
                        return (
                            <SwiperSlide style={{ maxWidth: 200, width: "20%", minWidth: 180 }} key={index}>
                                <Image src={img} alt={"생성 이미지 예시"} unoptimized></Image>
                            </SwiperSlide>
                        );
                    })}
                    {banner1.map((img, index) => {
                        return (
                            <SwiperSlide style={{ maxWidth: 200, width: "20%", minWidth: 180 }} key={index}>
                                <Image src={img} alt={"생성 이미지 예시"} unoptimized></Image>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Flex>

            <Flex>
                <Swiper
                    style={{ width: "90%", zIndex: 0 }}
                    slidesPerView={"auto"}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                >
                    {banner1.map((img, index) => {
                        return (
                            <SwiperSlide key={index} style={{ minWidth: 150, width: "15%" }}>
                                <Image src={img} alt={"생성 이미지 예시"} unoptimized></Image>
                            </SwiperSlide>
                        );
                    })}
                    {banner1.map((img, index) => {
                        return (
                            <SwiperSlide key={index} style={{ minWidth: 150, width: "15%" }}>
                                <Image src={img} alt={"생성 이미지 예시"} unoptimized></Image>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Flex>
        </Flex>
    );
};
export default ImageSection;
