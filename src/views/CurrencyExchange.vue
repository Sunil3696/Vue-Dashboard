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


        <div class="subpage-content">
            <!-- List of currency exchange rates -->

            <h2>💱 Currency Exchange</h2>
            <p v-if="error" class="error">{{ error }}</p>
            <ul>
                <li v-for="(rate, currency) in rates" :key="currency">
                    <p>{{ currency }}: {{ rate }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { fetchCurrencyRates } from "../api/currencyExchange";

export default {
    data() {
        return {
            rates: {}, // To store the exchange rates data
            error: null, // To store any error messages
        };
    },
    async created() {
        try {
            // Fetch the exchange rates for USD and store them in rates
            this.rates = await fetchCurrencyRates("USD");
        } catch (err) {
            this.error = err.message;
        }
    },
};
</script>

<style scoped>
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
    font-size: 1rem;
}

.sidebar-links a:hover {
    text-decoration: underline;
}


.subpage-content {
    margin-left: 250px;
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


@media (max-width: 768px) {
    .sidebar {
        position: fixed;
        width: 200px;
        height: 100vh;
        z-index: 1000;
        transform: translateX(-100%);
        transition: transform 0.3s ease-in-out;
    }

    .sidebar.open {
        transform: translateX(0);
    }

    .subpage-content {
        margin-left: 0;
        padding: 1rem;
    }
}
</style>