import Template, { Form } from "../components/CreateTemplate";
import { getTextToImage } from "../apis/getTextToImage";
const Create = () => {
    const onCreateTextToImage = (form: Form, prompt: string) => {
        const inputPrompt = `${form.genre}, ${form.gender}, ${form.color}, ${form.clothes}, ${form.background}, ${prompt}`;
        getTextToImage(inputPrompt);
    };

    return <Template onClick={onCreateTextToImage}></Template>;
};

export default Create;
