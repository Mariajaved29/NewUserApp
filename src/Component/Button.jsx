import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
border: none;
background-color: #402258;
color: white;
height: 40px;
width: 70px;
border-radius:10px;
margin-top:5px;
`

function Button() {
    return (
        <div>
            <ButtonStyled>Signup</ButtonStyled>
        </div>
    )
}

export default Button