import axios from "axios"
import { api } from "../configs/axiosConfig";
// 함수를 쓰는 이유 = 재사용, 분리
export const joinApi = async (joinInfo) => {
    return await api.post("/api/auth/join", joinInfo);
}

export const loginApi = async (loginInfo) => {
    return await api.post("/api/auth/login", loginInfo);
}

export const sendAuthMailApi = async (username) => {
    return await api.post("/api/auth/email", {username});
}