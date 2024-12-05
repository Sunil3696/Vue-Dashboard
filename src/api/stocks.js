// Importing the axios library to make HTTP requests
import axios from "axios";
// Defining the API key for accessing the NewsAPI AND BASE URL
const API_KEY = "22b913b3d6c0416f935b4bff02b37097"; 
const BASE_URL = "https://newsapi.org/v2";
// Asynchronous function to fetch stock news using the NewsAPI
export const fetchStockNews = async () => {
  try {
        // Making a GET request to the '/everything' endpoint with query parameters
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
