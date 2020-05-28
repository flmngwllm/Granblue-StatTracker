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
