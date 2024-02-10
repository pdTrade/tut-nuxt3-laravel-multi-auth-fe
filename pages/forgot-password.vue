<script setup lang="ts">
const form = ref({
  email: "",
});

const auth = useAuthStore();

const handleRegister = async () => {
  const { error } = await auth.passwordReset(form.value);

  if (!error.value) {
    return navigateTo("/");
  }
};
</script>

<template>
  <div>page: admin/register</div>

  <div class="w-full max-w-xs">
    <form
      class="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
      @submit.prevent="handleRegister"
    >
      <div class="mb-4">
        <label class="mb-2 block text-sm font-bold text-gray-700" for="email">
          Email
        </label>
        <input
          class="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow"
          id="email"
          type="text"
          placeholder="xxxx@xxx.com"
          v-model="form.email"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Password Reset
        </button>
      </div>
    </form>
  </div>
</template>
