<script setup>
import { ref } from 'vue';
import SignupForm from '@/components/SignupForm.vue';
import LoginForm from '@/components/LoginForm.vue';

const showLogin = ref(true);
</script>

<template>
  <main>
    <div v-if="showLogin">
      <LoginForm />
      <button @click="showLogin = false" class="block mx-auto mt-4 text-blue-500">Don't have an account? Sign up</button>
    </div>
    <div v-else>
      <SignupForm />
      <button @click="showLogin = true" class="block mx-auto mt-4 text-blue-500">Already have an account? Login</button>
    </div>
  </main>
</template>
