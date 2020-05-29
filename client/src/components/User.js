import React, {Component} from 'react'
import {querySingleUser} from '../gql/queries'
import {Query} from 'react-apollo'


class User extends Component{
    render(){
        return(
            <Query query={querySingleUser} variables={{ id: this.props.match.params.id}}>
                {({loading, error, data}) => {
                    if (loading){
                        return "loading"
                    }
                    if (error){
                        return `Error! ${error.message}`
                    }

                    return(
                        <div>
                            {data.user.name}
                            {data.user.email}
                            {data.user.description}
                            {data.user.totalwins}
                            {data.user.charactersID}
                        </div>
                        )
                }}
            </Query>
        )
    }
}

export default User