import gql from 'graphql-tag'

export const Add_User = gql`
mutation addUser($name: String!, $email: String, $description: String, $totalwins: Int, $charactersID: ID){
    addUser(name: $name, email: $email, description: $description, totalwins: $totalwins, charactersID: $charactersID){
        _id
        email
        name
        description
        totalwins
        charactersID{
            name  
            description
            wins
            losses
            percentage
            image
        }
    }
}
`

export const Update_User = gql`
mutation UpdateUser($id: String!, $name: String!, $email: String, $description: String, $totalwins: Int, $charactersID: ID){
    updateUser(id: $id, name: $name, email: $email, description: $description, totalwins: $totalwins, charactersID: $charactersID){
        _id
        email
        name
        description
        totalwins
        charactersID{
            name 
            description 
            wins
            losses
            percentage
            image
        }
    }
}
`

export const DeleteUser = gql`
mutation($id: String!){
    deleteUser(id: $id){
        id
        email
        description
        name
        description
        totalwins
        charactersID
    }
}
`

export const AddCharacter = gql`
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

export const UpdateCharacter = gql`
mutation($id: String!, $name: String,  $description: String, $wins: Int, $losses: Int, $percentage: Int, $image: String){
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

export const DeleteCharacter = gql`
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
