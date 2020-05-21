import {gql} from 'graphql-tag'

export const AddUser = gql`
mutation($name: String, $email: String, $description: String, $totalwins: Int, $charactersID: String){
    addUser(name: $name, email: $email, description: $description, totalwins: $totalwins, charactersID: $charactersID){
        id
        email
        name
        description
        totalwins
        charactersID
    }
}
`

export const UpdateUser = gql`
mutation($id: String!, $name: String, $email: String, $description: String, $totalwins: Int, $charactersID: String){
    updateUser(id: $id, name: $name, email: $email, description: $description, totalwins: $totalwins, charactersID: $charactersID){
        id
        email
        name
        description
        totalwins
        charactersID
    }
}
`

export const DeleteUser = gql`
mutation($id: String!){
    deleteUser(id: $id){
        id
        email
        name
        description
        totalwins
        charactersID
    }
}
`

export const AddCharacter = gql`
mutation($name: String, $wins: Int, $losses: Int, $percentage: Int, $image: String){
    addCharacter(name: $name, wins: $wins, losses: $losses, percentage: $percentage, image: $image){
        name
        wins
        losses
        percentage
        image
    }
}
`

export const UpdateCharacter = gql`
mutation($id: String!, $name: String, $wins: Int, $losses: Int, $percentage: Int, $image: String){
    updateCharacter(id: $id, name: $name, wins: $wins, losses: $losses, percentage: $percentage, image: $image){
        id
        name 
        wins
        losses
        percentage
        image
    }
}
`

export const DeleteCharacter = gql`
mutation($id: String!){
    deleteCharacter(id: $id){
        id
        name
        wins
        losses
        percentage
        image
    }
}
`
