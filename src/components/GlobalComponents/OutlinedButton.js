import React, { Component } from 'react';
import styled from 'styled-components';

class OutlinedButton extends Component {
   

    render(){
      const Input = styled.input.attrs({
        type: 'submit'
      })`
        display: block; ${ props => props.center ? 'margin: 0 auto;' : props => props.right ? 'float: right' : ''  }
        height: ${ props => props.tall ? '50px' : props.mid ? '40px' : '30px' }
        width: ${ props => props.large ? '100%' : props.medium ? '150px' : '100px' }
        text-transform: uppercase
        font-size: 1rem
        outline: none
        color: #454545
        border: solid 1px #454545
        cursor: pointer
        `
        return(
            <Input
                className = { this.props.className }
                value = 'submit'
                center = { this.props.center }
                right = { this.props.right }
                tall = { this.props.tall }
                mid = { this.props.mid }
                large = { this.props.large }
                medium = { this.props.medium }
            />
        )  
    }
}
export default OutlinedButton;