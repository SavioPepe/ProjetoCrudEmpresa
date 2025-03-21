<template>
  <div class="home">
    <h1>Home</h1>

    <section class="registration-section">
      <h2>Cadastro de Usuário</h2>
      <form @submit.prevent="registerUser">
        <input v-model="user.name" placeholder="Nome" required />
        <input v-model="user.email" type="email" placeholder="Email" required />
        <input v-model="user.password" type="password" placeholder="Senha" required />
        <button type="submit">Cadastrar Usuário</button>
      </form>
    </section>

    <section class="registration-section">
      <h2>Cadastro de Empresa</h2>
      <form @submit.prevent="registerCompany">
        <input v-model="company.name" placeholder="Nome da Empresa" required />
        <input v-model="company.address" placeholder="Endereço" required />
        <button type="submit">Cadastrar Empresa</button>
      </form>
    </section>

    <section class="registration-section">
      <h2>Cadastro de Associação</h2>
      <form @submit.prevent="registerAssociation">
        <input v-model.number="association.userId" placeholder="ID do Usuário" required />
        <input v-model.number="association.companyId" placeholder="ID da Empresa" required />
        <button type="submit">Cadastrar Associação</button>
      </form>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import api from '@/services/axios'

const user = ref({
  name: '',
  email: '',
  password: ''
})
const company = ref({
  name: '',
  address: ''
})
const association = ref({
  userId: null,
  companyId: null
})

const registerUser = async () => {
  try {
    await api.post('/users', user.value)
    alert('Usuário cadastrado com sucesso!')
    user.value = { name: '', email: '', password: '' }
  } catch (err) {
    console.error(err)
    alert('Erro ao cadastrar usuário.')
  }
}

const registerCompany = async () => {
  try {
    await api.post('/companies', company.value)
    alert('Empresa cadastrada com sucesso!')
    company.value = { name: '', address: '' }
  } catch (err) {
    console.error(err)
    alert('Erro ao cadastrar empresa.')
  }
}

const registerAssociation = async () => {
  try {
    await api.post('/company-user', association.value)
    alert('Associação cadastrada com sucesso!')
    association.value = { userId: null, companyId: null }
  } catch (err) {
    console.error(err)
    alert('Erro ao cadastrar associação.')
  }
}
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
}
.registration-section {
  margin-bottom: 2rem;
}
.registration-section form {
  display: flex;
  flex-direction: column;
}
.registration-section form input,
.registration-section form button {
  margin: 0.5rem 0;
  padding: 0.5rem;
}
</style>
