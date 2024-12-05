<template>
  <div class="dashboard-container">

    <div class="overlay" v-if="isSidebarOpen" @click="closeSidebar"></div>

    <!-- Hamburger Menu (only shown on mobile) to toggle the sidebar -->
    <button class="hamburger-menu" @click="toggleSidebar">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- Sidebar -->
    <aside :class="['sidebar', { open: isSidebarOpen }]">
      <h2 class="sidebar-title">Menu</h2>
      <ul class="sidebar-links">
        <li><router-link to="/dashboard" @click="closeSidebar">Dashboard</router-link></li>
        <li><router-link to="/share-market" @click="closeSidebar">Share Market</router-link></li>
        <li><router-link to="/weather-forecast" @click="closeSidebar">Weather Forecast</router-link></li>
        <li><router-link to="/currency-exchange" @click="closeSidebar">Currency Exchange</router-link></li>
        <li><router-link to="/crypto-market" @click="closeSidebar">Crypto Market</router-link></li>
      </ul>
    </aside>

    <!-- Main Content -->
    <div class="main-content">
     <header class="header">
  <button class="menu-toggle" @click="toggleSidebar">☰</button>
  <h1 class="header-title">Dashboard</h1>
  <button class="logout-button" @click="logout">Logout</button>
</header>
      <main class="content">
        <div class="widgets-container">
          <WeatherWidget />
          <RandomQuotes />
          <Checklist />
          <Calculator />
          <ChartWidget />
        </div>


        <div class="stock-news-landscape">
          <StocksNews />
        </div>
      </main>
      <footer class="footer">
        <p>© 2024 Sunil Balami and Kanchandeep Kaur. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>

<script>
import WeatherWidget from "../components/WeatherWidget.vue";
import RandomQuotes from "../components/RandomQuotes.vue";
import Checklist from "../components/ChecklistWidget.vue";
import Calculator from "../components/CalculatorWidget.vue";
import ChartWidget from "../components/ChartWidget.vue";
import StocksNews from "../components/StocksNews.vue";

export default {
  components: {
    WeatherWidget,
    RandomQuotes,
    Checklist,
    Calculator,
    ChartWidget,
    StocksNews,
  },
  data() {
    return {
      isSidebarOpen: false, 
    };
  },
  computed: {
    isMobile() {
      return window.innerWidth <= 768;
    },
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen; 
    },
    closeSidebar() {
      this.isSidebarOpen = false; 
    },
    logout() {
      localStorage.removeItem("token"); // Clear token from local storage
      this.$router.push("/"); // Redirect to login page
    },
  },
};
</script>

<style scoped>

.dashboard-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f8f9fa; 
  overflow-x: hidden; 
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
}


.sidebar {
  width: 250px;
  background-color: #003d99;
  color: white;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: -100%;
  height: 100%;
  overflow-y: auto;
  transition: left 0.3s ease-in-out;
  z-index: 1000;
}

.sidebar.open {
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

/* Hamburger Menu */
.hamburger-menu {
  display: none; /* Hidden on desktop */
  background-color: #0052cc;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1001;
  position: absolute;
  top: 1rem;
  left: 1rem;
  border-radius: 5px;
}

.hamburger-menu span {
  display: block;
  width: 35px;
  height: 5px;
  background-color: white;
  margin: 0.5rem auto;
}

/* Main Content */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: #003d99;
  color: white;
  display: flex;
  align-items: center;
  padding: 1rem;
}

.menu-toggle {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
}

.header-title {
  font-size: 1.5rem;
  margin-left: 1rem;
}

.content {
  padding: 2rem;
}

.widgets-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.stock-news-landscape {
  margin-top: 2rem;
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  grid-column: span 2;
}


.footer {
  text-align: center;
  background-color: #003d99;
  color: white;
  padding: 1rem;
  font-size: 0.9rem;
  margin-top: auto;
}
.logout-button {
   background-color:#ff4d4d; /* Red color for logout */
   color:white; 
   border:none; 
   padding:.25rem .5rem; 
   border-radius:.25rem; 
   cursor:pointer; 
   margin-left:auto;
}

.logout-button:hover { 
   background-color:#cc0000; 
}

@media (max-width: 768px) {
  .hamburger-menu {
    display: block;
  }

  .widgets-container {
    grid-template-columns: 1fr;
  }

  .stock-news-landscape {
    grid-column: span 1;
  }

  .header {
    flex-direction: column; 
    align-items: flex-start;
  }
  
}
</style>
