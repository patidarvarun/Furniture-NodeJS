require("dotenv").config();
const port = process.env.PORT || "5000";
const { ApolloServer, gql } = require("apollo-server-express");
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

  app.use(express.json());
  app.get("/", function (req, res) {
    res.send(
      `<h1>Welcome to Furniture</h1><p>Please write graphql after 'http://localhost:5000/...</p>`
    );
  });
  app.use(express.static(__dirname + "/public"));
  app.use("/uploads", express.static("uploads"));
  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
}
startServer();
