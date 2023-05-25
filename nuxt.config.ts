// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxtjs/apollo'],

  colorMode: {
    preference: 'light',
    storageKey: 'na-color-scheme',
  },

  apollo: {
    clients: {
      default: './apollo/default.ts',
      github: {
        httpEndpoint: 'https://api.github.com/graphql',
        tokenStorage: 'localStorage',
      },
      todos: './apollo/todo.ts',
    },
  },
});
