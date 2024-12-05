import axios from "axios";

const API_KEY = "8d5ba03d1366f8056e56b7c7548726e7";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch weather data");
  }
};
