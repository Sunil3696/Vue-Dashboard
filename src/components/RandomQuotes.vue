<template>
    <div class="widget quote-widget">
      <h2>💬 Random Quote</h2>
      <p v-if="error" class="error">{{ error }}</p>
      <blockquote v-if="quote" class="quote-block">
        <p class="quote-text">"{{ quote }}"</p>
        <footer class="quote-author">- {{ author }}</footer>
      </blockquote>
    </div>
  </template>
  
  <script>
  import { fetchRandomQuote } from "../api/quotes";
  
  export default {
    data() {
      return {
        quote: "",
        author: "",
        error: null,
      };
    },
    async created() {
      try {
        const data = await fetchRandomQuote();
        this.quote = data.content;
        this.author = data.author;
      } catch (err) {
        this.error = "Failed to fetch the quote. Please try again later.";
      }
    },
  };
  </script>
  
  <style scoped>
  /* General Widget Styling */
  .widget {
    background: linear-gradient(135deg, #4caf50, #81c784);
    color: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    text-align: center;
  }
  
  /* Title Styling */
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: white;
  }
  
  /* Quote Block Styling */
  .quote-block {
    margin-top: 1rem;
    font-style: italic;
  }
  
  .quote-text {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    color: #ffffff;
  }
  
  .quote-author {
    font-size: 1rem;
    font-weight: bold;
    color: #ffeb3b;
  }
  
  /* Error Message Styling */
  .error {
    color: #ff6b6b;
    font-weight: bold;
    margin-top: 1rem;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .widget {
      padding: 1rem;
    }
  
    h2 {
      font-size: 1.5rem;
    }
  
    .quote-text {
      font-size: 1.2rem;
    }
  
    .quote-author {
      font-size: 0.9rem;
    }
  }
  </style>
  