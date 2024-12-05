// Importing the axios library to make HTTP requests
import axios from "axios";
// Defining the base URL for the API

const BASE_URL = "https://api.quotable.io";
// Asynchronous function to fetch a random quote from the API

export const fetchRandomQuote = async () => {
  try {
    // Returning the data from the response, which contains the random quote

    const response = await axios.get(`${BASE_URL}/random`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch quote.");
  }
};
