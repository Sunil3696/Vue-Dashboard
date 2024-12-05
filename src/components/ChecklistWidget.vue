<template>
  <div class="widget checklist-widget">
    <h2>✅ Checklist</h2>
    <div class="checklist-input">
      <input type="text" v-model="inputValue" placeholder="Add a new task..." @keyup.enter="handleAddItem"
        class="checklist-input-field" />
      <!-- Button to manually add a task -->
      <button @click="handleAddItem" class="checklist-add-button">
        ➕ Add
      </button>
    </div>
    <!-- Display the tasks in the checklist -->
    <ul class="checklist-items">
      <li v-for="(item, index) in items" :key="index" class="checklist-item" @click="handleRemoveItem(index)">
        <span>{{ item }}</span>
        <!-- Button to remove task from the checklist -->
        <button class="remove-button">❌</button>
      </li>
    </ul>
    <!-- Message shown when the checklist is empty -->
    <p v-if="!items.length" class="empty-message">
      Your checklist is empty. Start adding tasks!
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      inputValue: "",
    };
  },
  methods: {
    // Method to add a task to the checklist
    handleAddItem() {
      // Check if the input field is not empty
      if (this.inputValue.trim() !== "") {
        this.items.push(this.inputValue);
        this.inputValue = "";
      }
    },
    handleRemoveItem(index) {
      this.items.splice(index, 1);
    },
  },
};
</script>

<style scoped>
/* General Widget Styling */
.widget {
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-family: 'Arial', sans-serif;
}


h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}


.checklist-input {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.checklist-input-field {
  flex: 1;
  padding: 0.7rem;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  color: #333;
}

.checklist-input-field::placeholder {
  color: #aaa;
}

.checklist-add-button {
  padding: 0.7rem 1.2rem;
  background-color: #ffcc00;
  color: #333;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.checklist-add-button:hover {
  background-color: #ffdd33;
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Checklist Items */
.checklist-items {
  margin-top: 1rem;
  padding: 0;
  list-style: none;
}

.checklist-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 1rem;
  background-color: #ffffff;
  color: #333;
  border-radius: 12px;
  margin-bottom: 0.7rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.checklist-item:hover {
  background-color: #f0f0f0;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.remove-button {
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #ff6b6b;
  cursor: pointer;
  transition: color 0.3s ease;
}

.remove-button:hover {
  color: #ff4c4c;
}

/* Empty Message */
.empty-message {
  margin-top: 1rem;
  font-size: 1rem;
  color: #ffeb3b;
  font-style: italic;
}

/* Responsive Design */
@media (max-width: 768px) {
  .checklist-input-field {
    font-size: 0.9rem;
  }

  .checklist-add-button {
    padding: 0.5rem;
    font-size: 0.9rem;
  }

  .checklist-item {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }
}
</style>
