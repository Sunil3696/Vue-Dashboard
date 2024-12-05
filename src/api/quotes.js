import axios from "axios";

const BASE_URL = "https://api.quotable.io";

export const fetchRandomQuote = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/random`);
    return response.data; 
  } catch (error) {
    throw new Error("Failed to fetch quote.");
  }
};
