import Header from "./Header";
import {
    Flex,
    Heading,
    Center,
    Card,
    CardHeader,
    Text,
    CardBody,
    Button,
    List,
    ListItem,
    ListIcon,
    SimpleGrid,
    GridItem,
    CardFooter,
} from "@chakra-ui/react";
import { CheckIcon, StarIcon } from "@chakra-ui/icons";
const CreditTemplate = () => {
    return (
        <>
            <Header></Header>
            <Flex bg="gray.100" direction="column" gap={10} pt={150} pb={100} mx={"auto"}>
                <Center flexDirection={"column"}>
                    <Heading textAlign={"center"} py={100}>
                        사용 방식에 따라 선택하는 <br />
                        합리적인 요금제
                    </Heading>
                    <SimpleGrid gap={5} columns={[1, null, 3]}>
                        <GridItem maxW={250}>
                            <FreeCreditCard />
                        </GridItem>
                        <GridItem maxW={250}>
                            <ProCreditCard />
                        </GridItem>
                        <GridItem maxW={250}>
                            <EnterpriseCreditCard />
                        </GridItem>
                    </SimpleGrid>
                </Center>
            </Flex>
        </>
    );
};

export default CreditTemplate;

const FreeCreditCard = () => (
    <Card minH={450}>
        <CardHeader>
            <Heading fontSize="2xl">Free</Heading>
        </CardHeader>
        <CardBody>
            <Text fontSize="4xl" fontFamily="nexon-bold">
                무료
            </Text>
            <Text fontSize="sm" color="gray">
                월 요금
            </Text>
            <Text fontSize="md">cover craft를 사용하는 모든 사용자들을 위한 서비스입니다.</Text>
        </CardBody>
        <CardFooter flexDir="column" gap={5}>
            <Button variant="outline" colorScheme="purple" width="100%">
                무료로 시작하기
            </Button>
            <List>
                <ListItem>
                    <ListIcon as={CheckIcon} color="purple.500" />
                    5회 프리미엄 사진 생성
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} color="purple.500" />
                    원하는 조건에 맞는 사진 제공
                </ListItem>
            </List>
        </CardFooter>
    </Card>
);

const ProCreditCard = () => (
    <Card minH={450}>
        <CardHeader>
            <Heading fontSize="2xl">
                <StarIcon color={"yellow.300"} /> Pro
            </Heading>
        </CardHeader>
        <CardBody>
            <Text fontSize="4xl" fontFamily="nexon-bold">
                ￦12,900
            </Text>
            <Text fontSize="sm" color="gray">
                월 요금
            </Text>
            <Text fontSize="md">워터마크 없이 이미지를 이용할 수 있고, 더 효율적인 작업이 가능합니다.</Text>
        </CardBody>
        <CardFooter flexDir="column" gap={5}>
            <Button colorScheme="purple" width="100%">
                요금제 시작하기
            </Button>
            <List>
                <ListItem>
                    <ListIcon as={CheckIcon} color="purple.500" />
                    생성 이미지 워터마크 제거
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} color="purple.500" />
                    제한 없이 프리미엄 사진 생성
                </ListItem>
            </List>
        </CardFooter>
    </Card>
);

const EnterpriseCreditCard = () => (
    <Card minH={450}>
        <CardHeader>
            <Heading fontSize="2xl">Enterprise</Heading>
        </CardHeader>
        <CardBody>
            <Text fontSize="4xl" fontFamily="nexon-bold">
                영업팀 문의
            </Text>
            <Text fontSize="sm" color="gray">
                월 요금
            </Text>
            <Text fontSize="md">대규모 조직을 위한 다른 서비스를 문의해주세요.</Text>
        </CardBody>
        <CardFooter flexDir="column" gap={5}>
            <Button variant="outline" colorScheme="purple" width="100%">
                영업팀 문의
            </Button>
            <List>
                <ListItem>
                    <ListIcon as={CheckIcon} color="purple.500" />
                    상담 및 협의 후 추가 기능 제공
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} color="purple.500" />
                    API 연동 기능 제공
                </ListItem>
            </List>
        </CardFooter>
    </Card>
);
