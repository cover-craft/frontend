import { Center, Modal, ModalContent, ModalOverlay, Text, Flex } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

export default function LoadingModal({ isOpen }) {
    return (
        <Modal isOpen={isOpen} onClose={() => {}}>
            <ModalOverlay bg="blackAlpha.700" />
            <ModalContent shadow={"none"} backgroundColor={"transparent"} margin={"auto 0"} gap={10}>
                <Center>
                    <Spinner color="purple.300" size={"xl"} thickness="5px" />
                </Center>
                <Center>
                    <Text fontWeight={"bold"} color={"white"} fontSize={"xl"}>
                        이미지를 생성중이예요!
                    </Text>
                </Center>
            </ModalContent>
        </Modal>
    );
}
