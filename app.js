const express = require("express");
const graphqlHTTP = require("express-graphql").graphqlHTTP;
//requer the schema file
const schema = require("./schema.js");

//initialize the express server
const app = express();

//Now add the middleware and route it

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Server is ready Captain!");
});
