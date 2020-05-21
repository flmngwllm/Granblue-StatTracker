require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql')
const cors = require('cors')
const schema = require('./graphql/Schemas')
// const resolvers = require('./graphql/resolvers')


mongoose.connect(process.env.MONGODB_URI); 

const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully')
})

connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
}) 

app.get("/", (req, res) => {
    res.send("hello")
  });


//middleware




//allows to use cors
app.use('*', cors())

//allows the use of Graphql over HTTP and the Graphiql user interface
app.use('/graphql', cors(), graphqlHTTP({
    schema: schema,
    rootValue: global,
    graphiql: true,
}))


//parse body of HTTP requests from a URL encoded string
app.use(express.urlencoded({
    extended: true
}
))
//parse body of HTTP requests from a JSON String
app.use(express.json())


// directory to host static content
app.use(express.static(`${__dirname}/client/build`))


//
app.get('/*', (req, res)=>{
    res.sendFile(`${__dirname}/client/build/index.html`)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () =>{
    console.log('app is running ' + PORT)
})