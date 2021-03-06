import React,{Component} from 'react'
import { Query } from 'react-apollo'
import {queryCharacters} from '../gql/queries'
import {Link} from 'react-router-dom'


class Characters extends Component{
    render(){
        return(
            <Query query={queryCharacters}>
                {({loading,error,data}) =>{
                    if (loading){
                        return "...Loading"
                    }
                    if (error){
                        return `Error! ${error.message}`  
                    }

                    return(
                        data.characters.map((character) =>(
                            <div key={character._id}>
                              <img src={character.image} alt="character"/>
                              <p>{character.name}</p>
                              <p>{character.description}</p>
                              
                              
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

export default Characters