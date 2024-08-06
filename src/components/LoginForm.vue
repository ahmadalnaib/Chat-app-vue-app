<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const handleSubmit = () => {
  console.log({
    email: email.value,
    password: password.value,
  });
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <form
      @submit.prevent="handleSubmit"
      class="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
    >
      <h2 class="text-2xl font-bold mb-4 text-center">Login</h2>

      <div class="mb-4">
        <input
          type="email"
          placeholder="Email"
          v-model="email"
          class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div class="mb-4">
        <input
          type="password"
          placeholder="Password"
          v-model="password"
          class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Login
      </button>
    </form>
  </div>
</template>
