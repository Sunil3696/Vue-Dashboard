<template>
    <div class="subpage-with-sidebar">
      <!-- Sidebar -->
      <aside class="sidebar">
        <h2 class="sidebar-title">Menu</h2>
        <ul class="sidebar-links">
          <li><router-link to="/dashboard">Dashboard</router-link></li>
          <li><router-link to="/share-market">Share Market</router-link></li>
          <li><router-link to="/weather-forecast">Weather Forecast</router-link></li>
          <li><router-link to="/currency-exchange">Currency Exchange</router-link></li>
          <li><router-link to="/crypto-market">Crypto Market</router-link></li>
        </ul>
      </aside>
  
      <!-- Weather Forecast Content -->
      <div class="subpage-content">
        <h2>☁️ Weather Forecast</h2>
        <p v-if="error" class="error">{{ error }}</p>
        <div v-if="weatherData.length" class="forecast-container">
          <div v-for="forecast in weatherData" :key="forecast.date" class="forecast-card">
            <h3>{{ forecast.date }}</h3>
            <p class="temperature">{{ forecast.temp }}°C</p>
          </div>
        </div>
        <p v-else-if="!error">Loading...</p>
      </div>
    </div>
  </template>
  
  <script>
  import { fetchWeatherForecast } from "../api/weatherforcast";
  
  export default {
    data() {
      return {
        weatherData: [],
        error: null,
      };
    },
    async created() {
      try {
        this.weatherData = await fetchWeatherForecast("Barrie");
      } catch (err) {
        this.error = err.message;
      }
    },
  };
  </script>
  
  <style scoped>
  /* Layout Styling */
  .subpage-with-sidebar {
    display: flex;
    min-height: 100vh;
    background-color: #f8f9fa; 
  }
  
  .sidebar {
    width: 250px;
    background-color: #003d99;
    color: white;
    padding: 1rem;
    height: 100vh;
    position: fixed;
    left: 0;
  }
  
  .sidebar-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .sidebar-links {
    list-style: none;
    padding: 0;
  }
  
  .sidebar-links li {
    margin: 1rem 0;
  }
  
  .sidebar-links a {
    color: white;
    text-decoration: none;
  }
  
  .sidebar-links a:hover {
    text-decoration: underline;
  }
  
  /* Main Content Styling */
  .subpage-content {
    margin-left: 250px; /* Leave space for the sidebar */
    padding: 2rem;
    flex: 1;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .error {
    color: red;
    font-weight: bold;
  }
  
  /* Forecast Card Styling */
  .forecast-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem; /* Space between cards */
  }
  
  .forecast-card {
    background-color: #e7f3fe; /* Light blue background */
    border-radius: 8px;
    padding: 1rem;
    text-align: center; /* Center text */
  }
  
  .temperature {
     font-size: larger; /* Larger temperature text */
     font-weight: bold; 
  }
  
  /* Responsive Styling */
  @media (max-width:768px) {
   .sidebar {
     position: fixed; 
     width:200px; 
     height:100vh; 
     z-index:1000; 
     transform:translateX(-100%);
     transition:transform .3s ease-in-out; 
   }
  
   .sidebar.open { 
     transform:translateX(0); 
   }
  
   .subpage-content { 
     margin-left:0; 
     padding:.5rem; 
   }
  
   .forecast-container {
     grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); /* Adjust for smaller screens */
   }
  }
  </style>
  