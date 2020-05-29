import gql from 'graphql-tag'


//Defininig apollo graphql queries so it can access queries from graphql backend
export const queryUsers = gql`
{
    users{
        _id
        name
        email
        totalwins
        charactersID{
            name 
            wins
            losses
            percentage
            image
        }
    }
}
`

export const querySingleUser = gql`
query($id: ID){
    user(id: $id){
        _id
        name
        email
        totalwins
        charactersID{
            name  
            wins
            losses
            percentage
            image
        }
    }
}
`

export const queryCharacters = gql`
{
    characters{
        name
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
        wins
        losses 
        percentage
        image
    }
}
`