<script setup lang="ts">
import type { Credentials } from '~~/types/Type';

const form = ref<Credentials>({
  email: '',
  password: '',
});

const auth = useAuthStore();

const handleLogin = async () => {
  if (auth.isLoggedIn) {
    // return navigateTo('/');
  }

  const { error } = await auth.login(form.value, 'admin');

  if (!error.value) {
    return navigateTo('/');
  }
}
</script>

<template>

  <div>
    page: admin/login
  </div>

  <div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="handleLogin">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight" id="email" type="text" placeholder="xxxx@xxx.com" v-model="form.email">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight" id="password" type="password" placeholder="xxxxxxxx" v-model="form.password">
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Login
      </button>
    </div>
  </form>
</div>

</template>
