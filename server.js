require("dotenv").config();
const port = process.env.PORT || "4000";
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./resolver/typeDefs");
const resolvers = require("./resolver/resolvers");
const express = require("express");
const app = express();
app.use(express.json());

const DatabaseConn = require("./config/connection");
DatabaseConn();

async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();

  apolloServer.applyMiddleware({ app: app });

  app.use((req, res) => {
    res.send(`<H1>Furniture Start</H1>`);
  });

  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
}
startServer();
