const graphql = require("graphql");
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = graphql;

//Initialize the schema value
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return "muthafuckas";
        },
      },
    },
  }),
});
module.exports = schema;
