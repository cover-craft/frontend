import axios from "axios";

export const getTextToImage = (prompt: string) => {
    const data = {
        model: "pastelmix",
        prompt: prompt,
        height: 720,
        width: 1064,
    };

    return axios
        .post("http://117.16.43.105:8000/txt2img", data)
        .then((res) => {
            console.log(res.data);
            localStorage.setItem("imgs", res.data.imgs);
            return res.data;
        })
        .catch((res) => {
            console.error("getTextToImage", res);
            return false;
        });
};
