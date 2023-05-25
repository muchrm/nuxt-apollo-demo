import { ApolloLink, ApolloClient, from } from '@apollo/client/core';
export default defineNuxtPlugin((nuxtApp) => {
  // Get Nuxt runtimeConfig and apollo instance
  const runtimeConfig = useRuntimeConfig();
  const { $apollo } = useNuxtApp();

  const activityMiddleware = new ApolloLink((operation, forward) => {
    // add the recent-activity custom header to the headers
    console.log(`starting request for ${operation.operationName}`);

    return forward(operation).map((data) => {
      console.log(`ending request for ${operation.operationName}`);
      return data;
    });
  });

  for (const [, client] of Object.entries($apollo.clients)) {
    client.setLink(from([activityMiddleware, client.link]));
  }
});

declare module '#app' {
  interface NuxtApp {
    $apollo: Record<string, ApolloClient<any>>;
  }
}
