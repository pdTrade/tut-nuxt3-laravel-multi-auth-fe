<script setup lang="ts">
const auth = useAuthStore();

const handleLogout = async () => {
  await auth.logout();
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
        <NuxtLink class="text-blue-500" to="/forgot-password">Rest</NuxtLink>
      </li>
      <li class="mr-6">
        <NuxtLink class="text-blue-500" to="/admin">Admin</NuxtLink>
      </li>
      <li class="mr-6">
        <NuxtLink class="text-blue-500" to="/admin/login">Admin/Login</NuxtLink>
      </li>
      <li class="mr-6">
        <NuxtLink class="text-blue-500" to="/admin/register"
        >Admin/Register</NuxtLink
        >
      </li>
      <li class="mr-6">
        <NuxtLink class="text-blue-500" to="/admin/forgot-password"
        >Admin/Rest</NuxtLink
        >
      </li>
    </ul>
    <div v-if="auth.user">
      <p>一般ログイン</p>
      <p>{{ auth.user }}</p>
    </div>
    <div v-if="auth.admin">
      <p>管理ログイン</p>
      <p>{{ auth.admin }}</p>
    </div>
    <button
        v-if="auth.isLoggedIn"
        @click="handleLogout"
        class="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
    >
      Logout
    </button>
    <slot />
  </div>
</template>
