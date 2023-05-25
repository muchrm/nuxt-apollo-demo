import { defineApolloClient } from '@nuxtjs/apollo';

export default defineApolloClient({
  httpEndpoint: process.env.NUXT_GITHUB_API || '',
  browserHttpEndpoint: process.env.NUXT_PUBLIC_TODO_API || '',
  wsEndpoint: 'wss://nuxt-gql-server-2gl6xp7kua-ue.a.run.app/query',
  httpLinkOptions: {
    headers: {
      'X-CUSTOM-HEADER': 123,
    },
  },
});
