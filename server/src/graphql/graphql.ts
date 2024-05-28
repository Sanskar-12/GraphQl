import { ApolloServer } from "@apollo/server";
import { graphqlSchema } from "./schema/schema.js";
import { graphqlResolvers } from "./resolvers/resolvers.js";
import { startStandaloneServer } from "@apollo/server/standalone";

export const connectGraphQl = () => {
  const server = new ApolloServer({
    typeDefs: graphqlSchema,
    resolvers: graphqlResolvers,
  });

  return server;
};
