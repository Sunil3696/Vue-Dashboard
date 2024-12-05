import axios from "axios";


axios.defaults.baseURL = "http://localhost:3000";

export const loginUser = (data) => axios.post("/api/user/login", data);
export const registerUser = (data) => axios.post("/api/user/register", data);
