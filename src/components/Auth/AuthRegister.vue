<template>
  <div class="auth-container">
    <div class="auth-box">
      <h1 class="auth-title">Register</h1>
      <form @submit.prevent="register">
        <label for="username" class="auth-label">Username</label>
        <input
          id="username"
          type="text"
          v-model="username"
          class="auth-input"
          placeholder="Enter your username"
          required
        />

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

        <button type="submit" class="auth-button">Register</button>
      </form>
      <p v-if="error" class="auth-error">{{ error }}</p>
      <p class="auth-footer">
        Already have an account? <router-link to="/">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { registerUser } from "../../api/auth";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async register() {
      try {
        if (!this.username || !this.email || !this.password) {
          this.error = "All fields are required!";
          return;
        }
        if (this.password.length < 6) {
          this.error = "Password must be at least 6 characters long!";
          return;
        }
        // Send registration request
        await registerUser({
          username: this.username,
          email: this.email,
          password: this.password,
        });
        this.error = null; // Clear errors
        this.$router.push("/"); // Redirect to login after successful registration
      } catch (err) {
        this.error =
          err.response?.data?.message || "Registration failed. Try again!";
      }
    },
  },
};
</script>

<style scoped>
/* Reuse styles from AuthLogin.vue */
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
.auth-error {
  color: #ff6b6b;
  margin-top: 1rem;
}
.auth-footer {
  text-align: center;
  margin-top: 1rem;
}
</style>
