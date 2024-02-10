import type { UseFetchOptions } from "nuxt/app";

export function useApiFetch<T>(path: string, options: UseFetchOptions<T> = {}) {

  const req = useRequestURL();

  let headers = {
    accept: 'application/json',
    referer: 'http://localhost:3000',
  };


  const token = useCookie('XSRF-TOKEN');

  if (token.value) {
    headers['X-XSRF-TOKEN'] = token.value;
  }

  if (process.server) {
    headers = {
      ...headers,
      ...useRequestHeaders(['cookie', 'referer']),
    }
  }

  return useFetch('http://localhost:8000' + path, {
    credentials: 'include',
    watch: false,
    ...options,
    headers: {
      ...headers,
      ...options?.headers,
    }

  });

}
