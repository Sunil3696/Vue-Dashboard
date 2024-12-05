// Setting the default base URL for all axios requests
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";
// Function to log in the user by sending a POST request with login data
export const loginUser = (data) => axios.post("/api/user/login", data);
// Function to register a new user by sending a POST request with registration data
export const registerUser = (data) => axios.post("/api/user/register", data);
