type User = {
  id: number;
  name: string;
  email: string;
};

type Credentials = {
  email: string;
  password: string;
};

type RegistrationInfo = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  const isLoggedIn = computed(() => !!user.value);
  const admin = ref<User | null>(null);
  const isAdminLoggedIn = computed(() => !!admin.value);

  async function fetchUser(role = '') {

    let apiPath = "/api/user";
    if (!!role) {
      apiPath = `/api/${role}/user`;
    }

    const { data , error} = await useApiFetch(apiPath, {method: 'get'});

    if (role === 'admin') {
      admin.value = data.value;
    } else {
      user.value = data.value;
    }

  }

  async function login(credentials: Credentials, role = "") {
    await useApiFetch( '/sanctum/csrf-cookie');

    let apiPath = "/login";
    if (!!role) {
      apiPath = `/${role}${apiPath}`;
    }

    const login = await useApiFetch(apiPath, {
      method: "POST",
      body: credentials,
    });

    await fetchUser(role);

    return login;
  }

  async function logout() {
    await useApiFetch('/logout', {method: 'POST'});
    user.value = null;
  }

  async function register(registrationInfo: RegistrationInfo, role = "") {
    await useApiFetch( '/sanctum/csrf-cookie');

    let apiPath = "/register";
    if (!!role) {
      apiPath = `/${role}${apiPath}`;
    }
  
    const register = await useApiFetch(apiPath, {
        method: 'POST',
        body: registrationInfo,
      }
    );

    await fetchUser();

    return register;
  }

  async function passwordReset(passwordResetInfo, role = "") {
    await useApiFetch("/sanctum/csrf-cookie");

    let apiPath = "/forgot-password";

    return await useApiFetch(apiPath, {
      method: "POST",
      body: passwordResetInfo,
    });
  }

  async function newPassword(newPasswordInfo) {
    let apiPath = "/reset-password";

    const ret = await useApiFetch(apiPath, {
      method: "POST",
      body: newPasswordInfo,
    });

    return ret;
  }

  return {user, login, fetchUser, isLoggedIn, logout, register, useApiFetch, passwordReset, newPassword, admin };
})
