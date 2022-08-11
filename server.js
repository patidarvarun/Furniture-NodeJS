require("dotenv").config();
const port = process.env.PORT || "5000";
const { ApolloServer } = require("apollo-server-express");
const schema = require("./types");
const express = require("express");
const app = express();
app.use(express.json());

const DatabaseConn = require("./config/connection");
DatabaseConn();

async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({
    schema,
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
