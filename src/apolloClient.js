import ApolloClient from "apollo-boost";

const client = new ApolloClient({
	uri: "http://192.168.56.101:4000/"
});

export default client;
