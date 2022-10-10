require("dotenv").config();
const { payment } = require("./payment");
const port = process.env.PORT || "5000";
const { ApolloServer } = require("apollo-server-express");
const schema = require("./types");
const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());

// var Publishable_Key = 'pk_test_51LabasSBAnAyyheh1eHmZUT6yHELndmIh1LvJy4eDuMZQo3kATeWkh0dHCI90hUvxQdFhlaCBhrNyQ1VQDVoJCno001vmRtGRk'
// var stripe = require("stripe")(
//   "sk_test_51LabasSBAnAyyheh89V5X2XUcvdbHgZGuYzKTuW6Q2QsvAykAnnIHeymcTPmaWzlXJv5MtIdNyENRxqXkNQ8mHcr00a5Oqd4Gk"
// );

const DatabaseConn = require("./config/connection");
DatabaseConn();

async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({
    schema,
  });
  await apolloServer.start();

  apolloServer.applyMiddleware({ app: app });

  router.post("/payment", payment);
  app.use(express.json());
  app.use(express.static(__dirname + "/public"));
  app.use("/uploads", express.static("uploads"));
  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
}
startServer();
