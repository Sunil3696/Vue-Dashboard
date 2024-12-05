<template>
    <div class="stocks-news">
<!-- Title of the widget -->

      <h2>📊 Stock News</h2>
<!-- Conditional rendering for errors -->
      <p v-if="error" class="error">{{ error }}</p>
<!-- List of stock news articles -->
      <ul>
        <li v-for="(article, index) in limitedNews" :key="index" class="news-item">
          <a :href="article.url" target="_blank" class="news-title">
            {{ article.title }}
          </a>
          <!-- Short description of the article -->
          <p class="news-description">{{ article.description }}</p>
          <span class="news-date">
            {{ new Date(article.publishedAt).toLocaleDateString() }}
          </span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
    // Importing the function to fetch stock news from an API module
  import { fetchStockNews } from "../api/stocks";
  
  export default {
    data() {
      return {
        news: [],
        error: null,
      };
    },
    computed: {
      limitedNews() {
        return this.news.slice(0, 5); // Limit to 5 articles
      },
    },
    async created() {
      try {
        this.news = await fetchStockNews();
      } catch (err) {
        this.error = "Failed to fetch stock news. Please try again later.";
      }
    },
  };
  </script>
  
  <style scoped>
  /* General Widget Styling */
  .stocks-news {
    background: linear-gradient(135deg, #0052cc, #003d99);
    color: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    font-family: 'Arial', sans-serif;
  }
  
  /* Title Styling */
  .stocks-news h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #ffcc00;
  }
  
  /* News List Styling */
  .stocks-news ul {
    list-style: none;
    padding: 0;
  }
  
  .news-item {
    margin-bottom: 1.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 1rem;
  }
  
  .news-item:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
  
  /* News Title Styling */
  .news-title {
    font-size: 1.2rem;
    font-weight: bold;
    color: #ffcc00;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .news-title:hover {
    color: #ffd54f;
  }
  
  /* News Description */
  .news-description {
    font-size: 1rem;
    margin: 0.5rem 0;
    color: #e5e7eb;
  }
  
  /* News Date */
  .news-date {
    font-size: 0.9rem;
    color: #cbd5e0;
  }
  
  /* Error Message Styling */
  .error {
    color: #ff6b6b;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .stocks-news h2 {
      font-size: 1.5rem;
    }
  
    .news-title {
      font-size: 1.1rem;
    }
  
    .news-description {
      font-size: 0.9rem;
    }
  
    .news-date {
      font-size: 0.8rem;
    }
  }
  </style>
  