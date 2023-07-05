import axios from "axios";

export const getTextToImage = () => {
    const data = {
        model: "pastelmix",
        prompt: "a handsome student",
        height: 720,
        width: 1064,
    };

    axios
        .post(`http://117.16.43.105:8000/txt2img`, data)
        .then((res) => {
            console.log(res.data);
        })
        .catch((res) => {
            console.error("getTextToImage", res);
        });
};
