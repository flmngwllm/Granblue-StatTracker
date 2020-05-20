import {gql} from 'graphql-tag'

export const queryUsers = gql`
{
    users{
        id
        name
        totalwins
        charactersID
    }
}
`

export const querySingleUser = gql`
query($id: String!){
    user(id: $id){
        id
        name
        totalwins
        charactersID
    }
}
`

export const  queryCharacters = gql`
{
    characters{
        name
        description
        wins
        losses
        percentage
        image
    }
}
`

export const querySingleCharacter = gql`
query($id: String!){
    character(id: $id){
        name
        description
        wins
        losses 
        percentage
        image
    }
}
`