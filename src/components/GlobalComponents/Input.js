import React, { Component } from 'react';
import styled from 'styled-components';
import '../../styles/global/css/colors.css'

class Input extends Component {
   

    render(){
      const Input = styled.input`
        display: block
        height: ${ props => props.tall ? '50px' : props.mid ? '40px' : '30px' }
        width: 100%
        text-transform: uppercase
        font-size: 1rem
        outline: none
        color: #454545
        border: solid 1px #454545
        cursor: pointer
        `
        const Label = styled.label`
            display: block; ${ props => props.center ? 'margin: 0 auto;' : props => props.right ? 'float: right' : ''  }
            font-size: 1.4rem
            outline: none
            color: #454545
            cursor: pointer
            `
        return(
            
            <div className={ this.props.className }>
                <Label htmlFor= { this.props.htmlFor } >
                { this.props.label }
                </Label>
                <Input
                    type = { this.props.type }
                    id= { this.props.id }
                    required
                    tall = { this.props.tall }
                    mid = { this.props.mid }
                    />
            </div>
        )  
    }
}
export default Input;