import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://generatepresstest.mystagingwebsite.com/graphql", // Replace with your WordPress GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
