const graphql = require("graphql")
/* Note the below declaration is the object destructuring syntax */
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = graphql

//Initialize the schema value
const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
       name: 'RootQueryType',
        fields: {
            hello: {
                type: GraphQLString,
                resolve() {
                    return "muthafuckas"
                }
           }
       }
    })
})
module.exports = schema