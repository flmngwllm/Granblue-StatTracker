const graphql = require('graphql')
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLList, GraphQLNonNull } = graphql
const Character = require("../models/Character")
const User = require("../models/User")


// // const users = [
// //     { name:"Will", totalwins:432 , description: "He cool", id:1},
// //     { name: "Book 2", totalwins: 32, description: "He cool", id: 2},
// //     { name: "Book 3", totalwins: 532, description: "He cool", id: 3 }
// // ]




// Character Schema
const characterType = new GraphQLObjectType({
    name: 'Character',
    fields : () => ({
        _id: {type: GraphQLID},
        name : { type: GraphQLString},
        description : { type: GraphQLString },
        wins : { type: GraphQLInt },
        losses :  { type: GraphQLInt },
        percentage: {type: (GraphQLInt)},
        image: { type: GraphQLString },
       
    })
})


// User Schema
const userType = new GraphQLObjectType({
    name: 'User',
    fields : () => ({
        _id: {type: GraphQLID},
        email : { type: GraphQLString},
        name : { type: GraphQLString},
        totalwins : { type: GraphQLInt },
        description : { type: GraphQLString },
        charactersID : {
          type: new GraphQLList(characterType),
            resolve(parent, args, ){
            // return User.findById({id : args._id}).populate('charactersID').exec()
            // return Character.findOne({id : parent._id})
            // return Character.findById(parent.charactersID)
            return Character.find({_id : {$in : parent.charactersID}})

            // return User.findById(args._id).populate('charactersID').exec()
            // User.findById(parent.charactersID).populate('charactersID').exec()

          }
        }
      })
    });





//query the graph to grab the data
const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        user : {
            type: userType,
            // arguments passed by the user while making the query
            args: {id : {type : GraphQLID}},
            resolve(parent, args){
                return User.findById(args.id)
                // return User.find((item) => { return item.id == args.id});
                //finding a single user by id
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
                email : {type: (GraphQLString)},
                totalwins: {type: (GraphQLInt)},
                description: {type: (GraphQLString)},
                charactersID: {type: GraphQLID}
            },
            resolve(parent, args){
                let user = new User({
                    name: args.name,
                    email: args.email,
                    totalwins: args.totalwins,
                    description: args.description,
                    charactersID: args.charactersID

                })
                return user.save()

            }

            
        },

        updateUser:{
            type: userType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLString)},
                name: {type: GraphQLNonNull(GraphQLString)},
                email : { type: GraphQLString},
                totalwins: {type: (GraphQLInt)},
                description: {type: (GraphQLString)},
                charactersID: {type: GraphQLID}
            },
            resolve(parent, args){
                return User.findByIdAndUpdate(args.id, args)
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


        addCharacter: {
            type: characterType,
            args: { 
                name: {type: GraphQLString},
                description: {type: (GraphQLString)},
                wins: {type: (GraphQLInt)},
                losses: {type: (GraphQLInt)},
                percentage: {type: (GraphQLInt)},
                image: {type: (GraphQLString)},
                
            },
            resolve(parent, args){
                let character = new Character({
                    name: args.name,
                    description: args.description,
                    wins: args.wins,
                    losses: args.losses,
                    percentage: args.percentage,
                    image: args.image
                })
                return character.save()
                
            }
        },

        updateCharacter:{
            type: characterType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLString)},
                name: {type: GraphQLString},
                description: {type:(GraphQLString)},
                wins: {type: (GraphQLInt)},
                losses: {type: (GraphQLInt)},
                percentage: {type: (GraphQLInt)},
                image: {type: (GraphQLString)},
            },
            resolve(parent, args){
                return Character.findByIdAndUpdate(args.id, args)
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


