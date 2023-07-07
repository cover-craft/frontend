import axios from "axios";

export const getTextToImage = (prompt: string) => {
    const data = {
        model: "pastelmix",
        prompt: prompt,
        height: 720,
        width: 1064,
    };

    axios
        .post(`${process.env.NEXT_PUBLIC_MODEL_API}/txt2img`, data)
        .then((res) => {
            localStorage.setItem("resultImg", res.data.Imgs[0]);
            localStorage.setItem("prompt", res.data.prompt);
            return true;
        })
        .catch((res) => {
            console.error("getTextToImage", res);
            return false;
        });
};
