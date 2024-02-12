export default defineNuxtPlugin(async (nuxtApp) => {
  const auth = useAuthStore();

  // if (!auth.isLoggedIn) {
    await auth.fetchUser();
    await auth.fetchUser('admin');
  // }
})
