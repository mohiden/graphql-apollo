const express = require("express");
const graphql = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const userData = require("./MOCK_DATA.json");
const schema = require('./schemas/index');

const app = express();




app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

app.listen(4000, () => {
    console.log("Running !");
});
