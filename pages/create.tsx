import Template, { Form } from "../components/CreateTemplate";
import { getTextToImage } from "../apis/getTextToImage";
import { useState } from "react";
import LoadingModal from "../components/LoadingModal";
import { useToast } from "@chakra-ui/react";

const Create = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const toast = useToast();

    const onCreateTextToImage = (form: Form, prompt: string) => {
        setIsLoading(true);
        const inputPrompt = `${form.genre}, ${form.gender}, ${form.color}, ${form.clothes}, ${form.background}, ${prompt}`;
        localStorage.setItem("prompt", inputPrompt);
        getTextToImage(inputPrompt).then((res) => {
            if (res) {
                setIsLoading(false);
                window.location.href = "./result";
            } else {
                toast({
                    title: `네트워크 문제!, 잠시 후에 다시 시도해주세요.`,
                    status: "warning",
                    isClosable: true,
                });
                setIsLoading(false);
            }
        });
    };

    return (
        <>
            <LoadingModal isOpen={isLoading} />
            <Template onClick={onCreateTextToImage}></Template>
        </>
    );
};

export default Create;
