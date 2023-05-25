import { defineApolloClient } from '@nuxtjs/apollo';

export default defineApolloClient({
  httpEndpoint: 'https://api.github.com/graphql',
  tokenStorage: 'localStorage',
});
