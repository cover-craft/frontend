import axios from "axios";

export function login(email: string, password: string) {
    const data = {
        email: email,
        password: password,
    };
    axios
        .post(`${process.env.NEXT_PUBLIC_API}/user/login`, data)
        .then((res) => {
            const response = res.data;
            console.log(response);
        })
        .catch((err) => {
            console.error("login", err);
        });
}

export function signup(email: string, password: string, nickname: string, is_pro = "false") {
    const data = { email: email, password: password, nickname: nickname, is_pro: is_pro };
    axios
        .post(`${process.env.NEXT_PUBLIC_API}/user/signup`, data)
        .then((res) => {
            const response = res.data;
            console.log(response);
        })
        .catch((err) => {
            console.error("signup", err);
        });
}
