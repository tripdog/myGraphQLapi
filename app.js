const express = require("express")
//initialize the express server
const app = express()

//Now add the middleware and route it
app.use('/graphql', graphqlHTTP())

app.listen(3000, () => {
    console.log("Server is ready Cap'n")
})
