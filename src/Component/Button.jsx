import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
    background-color: #62686e;
    box-shadow: 0 3px 0 0 darken($button, 10%);
    border-radius: 10px;
    border: none;
    color: white;
    cursor: pointer;
    display: block;
    font-size: 2em;
    line-height: 1.6em;
    margin: 2em 0 0;
    width:100%;
    outline: none;
    padding: .8em 0;
    text-shadow: 0 1px #68B25B;
    &:hover {
        background-color:#384047;
        text-shadow:0 1px 3px darken($button, 30%);
    }
`

function Button() {
    return (
        
            <ButtonStyled>Signup</ButtonStyled>
   
    )
}

export default Button