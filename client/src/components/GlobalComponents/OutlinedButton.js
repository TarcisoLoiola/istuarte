import React, { Component } from 'react';
import styled from 'styled-components';

class OutlinedButton extends Component {
   

    render(){
      const Input = styled.input.attrs({
        type: 'submit'
      })`
        display: block; ${ props => props.center ? 'margin: 0 auto;' : props => props.right ? 'float: right' : ''  }
        height: ${ props => props.tall ? '50px' : props.avar ? '40px' : '30px' }
        width: ${ props => props.large ? '100%' : props.medium ? '150px' : '100px' }
        text-transform: uppercase
        font-size: 1.2rem
        outline: none
        color: #B33F01
        border: solid 2px #B33F01
        cursor: pointer
        `
        return(
            <Input 
                value = 'submit'
                center = { this.props.center }
                right = { this.props.right }
                tall = { this.props.tall }
                avar = { this.props.avar }
                large = { this.props.large }
                medium = { this.props.medium }
            />
        )  
    }
}
export default OutlinedButton;