const graphql = require('graphql')
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLList, GraphQLNonNull } = graphql
const Character = require("../models/Character")
const User = require("../models/User")


// const users = [
//     { name:"Will", totalwins:432 , description: "He cool", id:1},
//     { name: "Book 2", totalwins: 32, description: "He cool", id: 2},
//     { name: "Book 3", totalwins: 532, description: "He cool", id: 3 }
// ]


// User Schema
const userType = new GraphQLObjectType({
    name: 'User',
    fields : () => ({
        _id: {type: GraphQLID},
        name : { type: GraphQLString},
        totalwins : { type: GraphQLInt },
        description :  { type: GraphQLString },
        character : {
            type : new GraphQLList(characterType),
            resolve(parent, args){
                return Character.find({charactersID: parent.id})
            }
        }
            
    })
})



// Character Schema
const characterType = new GraphQLObjectType({
    name: 'Character',
    fields : () => ({
        id: {type: GraphQLID},
        name : { type: GraphQLString},
        wins : { type: GraphQLInt },
        losses :  { type: GraphQLInt },
        percentage: {type: (GraphQLInt)},
        image: { type: GraphQLString },
        // user: {
        //     type: userType,
        // resolve(parent, args) {
        //     return User.findById(parent.charactersID);
        //     }
        // }
    })
})


//query the graph to grab the data
const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        user : {
            type: userType,
            // arguments passed by the user while making the query
            args: {id : {type : GraphQLID}},
            resolve(parent, args){

                // return User.find((item) => { return item.id == args.id});
                //finding a single user by id
                return User.findById(args.id)

            }
        },

        users : {
            type: new GraphQLList(userType),
            resolve(parent, args) {
                return User.find({})
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

//allows user to add, update and delete to mondodb through graphql
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: userType,
            args: {
                name: {type: GraphQLNonNull(GraphQLString)},
                totalwins: {type: (GraphQLInt)},
                description: {type: (GraphQLString)},
                charactersID: { type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args){
                let user = new User({
                    name: args.name,
                    totalwins: args.totalwins,
                    description: args.description,
                    charactersID: args.charactersID

                })
                return user.save()

            }

            
        },

        addCharacter: {
            type: characterType,
            args: {
                name: {type: GraphQLNonNull(GraphQLString)},
                wins: {type: (GraphQLInt)},
                losses: {type: (GraphQLInt)},
                percentage: {type: (GraphQLInt)},
                image: {type: (GraphQLString)},
                
            },
            resolve(parent, args){
                let character = new Character({
                    name: args.name,
                    wins: args.wins,
                    losses: args.losses,
                    percentage: args.percentage,
                    image: args.image
                })
                return character.save()
                
            }
        },

        deleteUser: {
            type: userType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args){
                    const remUser = User.findByIdAndRemove(args.id)
                    if(!remUser){
                        throw new Error('No character found')
                }
                return remUser
                
            }
        },

        deleteCharacter: {
            type: characterType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args){
                    const remCharacter = Character.findByIdAndRemove(args.id)
                    if(!remCharacter){
                        throw new Error('No character found')
                }
                return remCharacter
                
            }
        },
    }
})




module.exports = new GraphQLSchema({ query : Query, mutation : Mutation})


