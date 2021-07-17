import React from 'react';
import styled from 'styled-components';


const InputStyle = styled.input`
border: none;
outline: none;
border-bottom: 1px solid #555;
margin: 0 5px;
`


const Register = () => {
//    validation sample // const regEmail = /[a,z] / 
// regEmail = (true)
    // const [name, setName] = React.useAuthContext();
    const [name, setName] = React.useState();

    return(
     <>
    Name:<InputStyle type="text" value={name} onChange={(e) => {  setName(e.target.value) }} placeholder="Enter your name"/>
    <br/>
    Email:<InputStyle type="email" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter your email"/>
    <br/>
    Pass: <InputStyle type="password" value={name} onChange={(e) => {setName(e.target.value) }} placeholder="Enter your password"/>
    </>
    )
}

export {Register};