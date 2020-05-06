const graphql = require('graphql')
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLList, GraphQLNonNull } = graphql
const Character = require("../models/Character")
const User = require("../models/User")


const users = [
    { name:"Will", totalwins:432 , description: "He cool", id:1},
    { name: "Book 2", totalwins: 32, description: "He cool", id: 2},
    { name: "Book 3", totalwins: 532, description: "He cool", id: 3 }
]


// User Schema
const userType = new GraphQLObjectType({
    name: 'User',
    fields : () => ({
        id: {type: GraphQLID},
        name : { type: GraphQLString},
        totalwins : { type: GraphQLInt },
        description :  { type: GraphQLString },
    })
})



// Character Schema
const characterType = new GraphQLObjectType({
    name: 'Character',
    fields : () => ({
        id: {type: GraphQLID},
        name : { type: GraphQLString},
        wins : { type: GraphQLInt },
        loses :  { type: GraphQLInt },
        image : { type: GraphQLString }
    })
})



//query the graph to grab the data
const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        user : {
            type: userType,
            // arguments passed by the user while making the query
            args: {id : {type : GraphQLID} },
            resolve(parent, args){

                // return User.find((item) => { return item.id == args.id});
                //finding a single user by id
                return User.findById(args.id)

            }
        },

        users : {
            type: new GraphQLList(characterType),
            resolve(parent, args) {
                return Character.find({})
            }
        },

        character : {
            type: characterType,
            args: {id : {type : GraphQLID}},
            resolve(parent, args){

                return Character.findById(args.id)
            }
        },

        characters : {
            type: new GraphQLList(characterType),
            resolve(parent, args) {
                return Character.find({})
            }
        }

        
    }
})




module.exports = new GraphQLSchema({ query : Query})


