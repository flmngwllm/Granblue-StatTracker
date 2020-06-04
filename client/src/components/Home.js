import React, { Component } from 'react';
import Users from './Users';
import styled from 'styled-components'
import Gran from '../Images/granback.jpg'




const Background = styled.div `
    background-image: url(${Gran});
    background-size: cover;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    
`
    


class Home extends Component {
    render() {
        return (
            
            <div>
             <Background/>
             <Users/>

             </div>
              
        );
    }
}

export default Home;