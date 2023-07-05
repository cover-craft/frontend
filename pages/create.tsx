import Template from "../components/CreateTemplate";
import { getTextToImage } from "../apis/getTextToImage";
const Create = () => {
    const onCreateTextToImage = () => {
        getTextToImage();
    };

    return <Template onClick={onCreateTextToImage}></Template>;
};

export default Create;
