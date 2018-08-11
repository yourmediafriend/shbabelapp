import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://admin.shbabel.com/graphql"
});

export default client;