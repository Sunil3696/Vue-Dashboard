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

        <!-- Main Content -->
        <div class="subpage-content">
            <h2>💹 Crypto Market</h2>
            <p v-if="error" class="error">{{ error }}</p>
            <!-- Crypto Market Data List -->
            <ul>
                <li v-for="crypto in cryptoData" :key="crypto.id" class="crypto-item">
                    <p><strong>{{ crypto.name }}</strong> ({{ crypto.symbol.toUpperCase() }})</p>
                    <p>Price: ${{ crypto.current_price.toFixed(2) }}</p>
                    <p>24h Change:
                        <span :class="crypto.price_change_percentage_24h > 0 ? 'positive' : 'negative'">
                            {{ crypto.price_change_percentage_24h.toFixed(2) }}%
                        </span>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
// Importing the function to fetch cryptocurrency market data from the API

import { fetchCryptoMarketData } from "../api/cryptoMarket";

export default {
    data() {
        return {
            // Holds the fetched cryptocurrency data

            cryptoData: [],
            error: null,
        };
    },
    async created() {
        try {
            this.cryptoData = await fetchCryptoMarketData();
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

.crypto-item {
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #e5e7eb;
}

.crypto-item:last-child {
    border-bottom: none;
}

.positive {
    color: green;
}

.negative {
    color: red;
}


@media (max-width:768px) {
    .sidebar {
        position: fixed;
        width: 200px;
        height: 100vh;
        z-index: 1000;
        transform: translateX(-100%);
        transition: transform .3s ease-in-out;
    }

    .sidebar.open {
        transform: translateX(0);
    }

    .subpage-content {
        margin-left: 0;
        padding: .5rem;
    }
}
</style>