<template>
  <div class="widget calculator-widget">
    <h2>🧮 Simple Calculator</h2>
    <div class="calculator-inputs">
      <input 
        type="number" 
        v-model="num1" 
        placeholder="Enter number 1" 
        class="calculator-input" 
      />
      <input 
        type="number" 
        v-model="num2" 
        placeholder="Enter number 2" 
        class="calculator-input" 
      />
    </div>
    <div class="calculator-buttons">
      <button @click="handleCalculation('add')" class="calculator-button">+</button>
      <button @click="handleCalculation('subtract')" class="calculator-button">-</button>
      <button @click="handleCalculation('multiply')" class="calculator-button">×</button>
      <button @click="handleCalculation('divide')" class="calculator-button">÷</button>
    </div>
    <h3 v-if="result !== null" class="calculator-result">Result: {{ result }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num1: null,
      num2: null,
      result: null,
    };
  },
  methods: {
    handleCalculation(operation) {
      let res;
      switch (operation) {
        case "add":
          res = this.num1 + this.num2;
          break;
        case "subtract":
          res = this.num1 - this.num2;
          break;
        case "multiply":
          res = this.num1 * this.num2;
          break;
        case "divide":
          res = this.num1 / this.num2;
          break;
      }
      this.result = res;
    },
  },
};
</script>

<style scoped>
/* General Widget Styling */
.widget {
  background: #f3f4f6; /* Soft gray background */
  color: #333; /* Dark text for contrast */
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: 'Arial', sans-serif;
}

/* Title Styling */
h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #0052cc; /* Vibrant blue for the title */
}

/* Input Section */
.calculator-inputs {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.calculator-input {
  padding: 0.7rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  color: #333;
  background-color: #fff;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
}

.calculator-input::placeholder {
  color: #aaa;
}


.calculator-buttons {
  display: flex;
  justify-content: center;
  gap: 0.7rem;
}

.calculator-button {
  padding: 0.7rem 1.2rem;
  background-color: #0052cc;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.calculator-button:hover {
  background-color: #003d99;
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}


.calculator-result {
  margin-top: 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #0052cc;
}


@media (max-width: 768px) {
  .calculator-input {
    font-size: 0.9rem;
  }

  .calculator-button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }

  .calculator-result {
    font-size: 1.2rem;
  }
}
</style>
