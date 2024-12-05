// Importing the axios library to make HTTP requests
import axios from "axios";
// Defining the API key for accessing the OpenWeatherMap API
const API_KEY = "8d5ba03d1366f8056e56b7c7548726e7";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export const fetchWeather = async (city) => {
  try {
// Making a GET request to the 'weather' endpoint with the city name and other parameters

    const response = await axios.get(`${BASE_URL}weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });
// Returning the weather data from the response
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch weather data"
    );
  }
};
