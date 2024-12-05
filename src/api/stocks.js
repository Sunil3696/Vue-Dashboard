import axios from "axios";

const API_KEY = "22b913b3d6c0416f935b4bff02b37097"; 
const BASE_URL = "https://newsapi.org/v2";

export const fetchStockNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/everything`, {
      params: {
        q: "stocks",
        apiKey: API_KEY,
      },
    });
    return response.data.articles; 
  } catch (error) {
    throw new Error("Failed to fetch stock news.");
  }
};
