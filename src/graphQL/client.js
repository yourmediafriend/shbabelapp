import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://admin.shbabel.com/graphql"
});


export default client;