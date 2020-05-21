import React,{Component} from 'react'
import { Query } from 'react-apollo'
import {queryUsers} from '../gql/queries'
import {Link} from 'react-router-dom'


class Users extends Component{
    render(){
        return(
            <Query  query={queryUsers}>
                {({loading,error,data}) =>{
                    if (loading){
                        return "...Loading"
                    }
                    if (error){
                        return `Error! ${error.message}`  
                    }

                    return(
                        data.users.map((user) =>(
                            <div key ={user._id}>
                              {user.name}
                            </div>
                        )
                    )   
                 )    
            }  
        }  
            </Query>
        )
    }
}

export default Users