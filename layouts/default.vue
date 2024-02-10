<script setup lang="ts">
const auth = useAuthStore();

const handleLogout = async () => {
  await auth.logout()
};
</script>

<template>
  <div>
    <ul class="flex">
      <li class="mr-6">
        <NuxtLink class="text-blue-500" to="/">Home</NuxtLink>
      </li>
      <li class="mr-6">
        <NuxtLink class="text-blue-500" to="/auth">Auth</NuxtLink>
      </li>
      <li class="mr-6">
        <NuxtLink class="text-blue-500" to="/guest">Guest</NuxtLink>
      </li>
      <li class="mr-6">
        <NuxtLink class="text-blue-500" to="/login">Login</NuxtLink>
      </li>
      <li class="mr-6">
        <NuxtLink class="text-blue-500" to="/register">Register</NuxtLink>
      </li>
      <li class="mr-6">
        <NuxtLink class="text-blue-500" to="/forgot-password">Forgot Password</NuxtLink>
      </li>
    </ul>
    <div>
      id:{{  auth.user?.id }}
      name:{{  auth.user?.name }}
      email:{{  auth.user?.email }}
    </div>
    <button v-if="auth.isLoggedIn" @click="handleLogout" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
      Logout
    </button>
    <slot />
  </div>
</template>