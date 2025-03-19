<template>
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email:</label>
          <input v-model="email" type="email" id="email" required />
        </div>
        <div>
          <label for="password">Senha:</label>
          <input v-model="password" type="password" id="password" required />
        </div>
        <button type="submit">Entrar</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  import { useRouter } from 'vue-router'
  
  const email = ref('')
  const password = ref('')
  const error = ref('')
  const router = useRouter()
  
  const login = async () => {
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email: email.value,
        password: password.value,
      })
      localStorage.setItem('access_token', response.data.access_token)
      router.push('/home')
    } catch (err) {
      error.value = 'Credenciais inválidas. Tente novamente.'
    }
  }
  </script>
  
  <style scoped>
  .login {
    max-width: 400px;
    margin: 0 auto;
    padding: 1rem;
    text-align: center;
  }
  .error {
    color: red;
    margin-top: 1rem;
  }
  </style>
  