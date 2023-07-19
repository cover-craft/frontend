import Template from "../components/ResultTemplate";
import { useEffect, useState } from "react";
export default function Result() {
    const [img, setImg] = useState<string>();
    const [prompt, setPrompt] = useState<string>();
    useEffect(() => {
        setImg(localStorage.getItem("imgs"));
        setPrompt(localStorage.getItem("prompt"));
    }, []);

    return (
        <>
            <Template imgUrl={img} prompt={prompt}></Template>
        </>
    );
}
