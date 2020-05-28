import React, {Component} from 'react'
import {Add_User} from '../gql/mutations'
import {Mutation} from 'react-apollo'

class Signup extends Component{
    render(){
        let name, email;
        return(
          <Mutation mutation={Add_User} onCompleted={() => this.props.history.push('/')}>
              {(addUser, {loading, error}) => (
                  <div>
                      Create new user
                    <form onSubmit= {e=>{e.preventDefault(); 
                        addUser({variables: {name: name.value, email: email.value}})
                        name.value = ""
                        email.value = ""
                        }}>
                     <input type="text" name="name" ref={node => { name = node}} placeholder ="NAME"/> 
                     <input type="text" name="email" ref={node => { email = node}} placeholder ="EMAIL"/> 
                     <input type="submit" value="Submit" />
                  </form>

                 {loading && <p>Loading...</p>}
                 {error && <p>Error : Please try again </p>}
                  </div>
                  
              )}
          </Mutation>
        )
    }
}

export default Signup;