<template>
  <div class="auth-container">
    <div class="auth-box">
      <h1 class="auth-title">Login</h1>
      <form @submit.prevent="login">
        <label for="email" class="auth-label">Email</label>
        <input
          id="email"
          type="email"
          v-model="email"
          class="auth-input"
          placeholder="Enter your email"
          required
        />

        <label for="password" class="auth-label">Password</label>
        <input
          id="password"
          type="password"
          v-model="password"
          class="auth-input"
          placeholder="Enter your password"
          required
        />

        <button type="submit" class="auth-button">Login</button>
      </form>
      <p class="auth-footer">
        Don't have an account? <router-link to="/register">Register</router-link>
      </p>
    </div>

    <!-- Error Modal -->
    <div v-if="showErrorModal" class="modal-overlay" @click="closeModal">
      <div class="modal">
        <h2 class="modal-title">Login Failed</h2>
        <p>{{ error }}</p>
        <button class="modal-button" @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import { loginUser } from "../../api/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
      showErrorModal: false, // Modal visibility state
    };
  },
  methods: {
    async login() {
      try {
        const response = await loginUser({
          email: this.email,
          password: this.password,
        });
        const { token } = response.data;
        localStorage.setItem("token", token);
        this.$router.push("/dashboard");
      } catch (err) {
        this.error = err.response?.data?.message || "Login failed";
        this.showErrorModal = true; // Show error modal on failure
      }
    },
    closeModal() {
      this.showErrorModal = false; // Close the modal
    },
  },
};
</script>

<style scoped>
/* Existing Styles */
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #edf2f7;
}
.auth-box {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}
.auth-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #0052cc;
  text-align: center;
  margin-bottom: 1rem;
}
.auth-label {
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: #333333;
}
.auth-input {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.auth-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #0052cc;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}
.auth-button:hover {
  background-color: #003d99;
}
.auth-footer {
  text-align: center;
  margin-top: 1rem;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal {
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
}
.modal-title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #ff6b6b;
}
.modal-button {
  padding: 0.5rem 1rem;
  background-color: #0052cc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.modal-button:hover {
  background-color: #003d99;
}
</style>
