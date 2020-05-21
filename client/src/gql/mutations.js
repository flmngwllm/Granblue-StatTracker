import {gql} from 'graphql-tag'

export const addUser = gql`
mutation($name: String, $totalwins: Int, $charactersID: String){
    addUser(name: $name, totalwins: $totalwins, charactersID: $charactersID){
        id
        name
        totalwins
        charactersID
    }
}
`

export const updateUser = gql`
mutation($id: String!, $name: String, $totalwins: Int, $charactersID: String){
    updateUser(id: $id, name: $name, totalwins: $totalwins, charactersID: $charactersID){
        id
        name
        totalwins
        charactersID
    }
}
`

export const deleteUser = gql`
mutation($id: String!){
    deleteUser(id: $id){
        id
        name
        totalwins
        charactersID
    }
}
`

export const addCharacter = gql`
mutation($name: String, $description: String, $wins: Int, $losses: Int, $percentage: Int, $image: String){
    addCharacter(name: $name, description: $description, wins: $wins, losses: $losses, percentage: $percentage, image: $image){
        name
        description 
        wins
        losses
        percentage
        image
    }
}
`

export const updateCharacter = gql`
mutation($id: String!, $name: String, $description: String, $wins: Int, $losses: Int, $percentage: Int, $image: String){
    updateCharacter(id: $id, name: $name, description: $description, wins: $wins, losses: $losses, percentage: $percentage, image: $image){
        id
        name
        description 
        wins
        losses
        percentage
        image
    }
}
`

export const deleteCharacter = gql`
mutation($id: String!){
    deleteCharacter(id: $id){
        id
        name
        description
        wins
        losses
        percentage
        image
    }
}
`
