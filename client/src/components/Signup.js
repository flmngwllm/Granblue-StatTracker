import React, {Component} from 'react'
import {AddUser} from '../gql/mutations'
import {Mutation} from 'react-apollo'

class Signup extends Component{
    render(){
        return(
          <Mutation mutation={AddUser} onCompleted={() => this.props.history.push('/')}>
              {(addUser, {loading, error}) => (
                  <div>
                      Create new user
                    <form onSubmit= {e=>{e.preventDefault(); 
                        addUser({variables: {name: name.value, email: email.value}})}}>
                     <input></input> 
                  </form>
                  </div>
                  
              )}
          </Mutation>
        )
    }
}

export default Signup;