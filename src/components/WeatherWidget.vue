<template>
    <div class="widget weather-widget">
      <h2>🌤️ Weather</h2>
      <form class="weather-form" @submit.prevent="getWeather">
        <input 
          v-model="city" 
          placeholder="Enter city name" 
          class="weather-input" 
        />
        <button type="submit" class="weather-button">Get Weather</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
      <div v-if="weather" class="weather-info">
        <h3 class="weather-city">{{ weather.name }}</h3>
        <p class="weather-temp">{{ weather.main.temp }}°C</p>
        <p class="weather-description">{{ weather.weather[0].description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { fetchWeather } from "../api/weather";
  
  export default {
    data() {
      return {
        city: "Barrie", // Default city
        weather: null,
        error: null,
      };
    },
    methods: {
      async getWeather() {
        try {
          this.weather = await fetchWeather(this.city);
          this.error = null; 
        } catch (err) {
          this.error = "City not found or API error occurred."; 
        }
      },
    },
    async created() {
      // Automatically fetch weather for Barrie when the component loads
      await this.getWeather();
    },
  };
  </script>
  
  
  <style scoped>

  .widget {
    background: linear-gradient(135deg, #0052cc, #3f87f5);
    color: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    text-align: center;
  }
  

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  

  .weather-form {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .weather-input {
    padding: 0.5rem;
    border-radius: 6px;
    border: none;
    width: 70%;
    font-size: 1rem;
  }
  
  .weather-button {
    padding: 0.5rem 1rem;
    background-color: #ffcc00;
    border: none;
    border-radius: 6px;
    color: #003d99;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .weather-button:hover {
    background-color: #ffdd33;
    transform: scale(1.05);
  }
  

  .weather-info {
    margin-top: 1rem;
  }
  
  .weather-city {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .weather-temp {
    font-size: 2rem;
    margin: 0.5rem 0;
  }
  
  .weather-description {
    font-size: 1rem;
    font-style: italic;
    text-transform: capitalize;
  }
  
  /* Error Message Styling */
  .error {
    color: #ff6b6b;
    font-weight: bold;
    margin-top: 1rem;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .weather-input {
      width: 60%;
    }
  }
  </style>
  