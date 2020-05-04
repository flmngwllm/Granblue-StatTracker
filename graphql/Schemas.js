const graphql = require('graphql')
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLList, GraphQLNonNull } = graphql
const characterModel = require("../models/Character")


// User Schema
const userType = new GraphQLObjectType({
    name: 'User',
    fields : () => ({
        name : { type: GraphQLString},
        totalwins : { type: GraphQLInt },
        description :  { type: GraphQLString },
    })
})


// Character Schema
const characterType = new GraphQLObjectType({
    name: 'Character',
    fields : () => ({
        name : { type: GraphQLString},
        wins : { type: GraphQLInt },
        loses :  { type: GraphQLInt },
        image : { type: GraphQLString }
    })
})



