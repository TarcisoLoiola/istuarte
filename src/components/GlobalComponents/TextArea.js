import React, { Component } from 'react';
import styled from 'styled-components';

class TeaxtArea extends Component {
   

    render(){
      const TeaxtArea = styled.textarea.attrs({
          type: 'text',
          rows: '5',
          maxLength: '250',
          wrap: 'hard'
      })`
        display: block
        width: 100%
        text-transform: uppercase
        font-size: 1rem
        outline: none
        color: #454545
        border: solid 1px #454545
        cursor: pointer
        `
        const Label = styled.label`
            display: block;
            font-size: 1.4rem
            outline: none
            color: #454545
            cursor: pointer
            `
        return(
            
            <div className={ this.props.className }>
                <Label hmtlFor= { this.props.hmtlFor } >
                { this.props.label }
                </Label>
                <TeaxtArea
                    required
                    />
            </div>
        )  
    }
}
export default TeaxtArea;