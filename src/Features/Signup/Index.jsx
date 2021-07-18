import React, { useState } from 'react';
import Button from '../../Component/Button';
import styled from 'styled-components';
import {validateUserName,validateEmail,validatePassword} from '../../Common/Utills';
import {useAuthContex} from '../../Hooks/Auth'

const Register = () => {
    const [name, setName] = React.useState();
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
   
  

 
    return(
    <BodyStyle>
    <FormStyle>
    <HStyle>Sign Up!</HStyle>
    <InputPStyle>
      {/* <LabelStyle className="floatLabel"></LabelStyle> */}
      <InputStyle type="text" 
      value={name}
      title="Enter Username" 
      onBlur={(e) => {  setName(value) }} 
      placeholder=" Enter username"/>

     </InputPStyle>





    <br/>
    <InputPStyle>
      <LabelStyle className="floatLabel">Enter Email</LabelStyle>
      <InputStyle type="email" 
      value={email} 
      onBlur={(e) => validateEmail(e)}
      placeholder=" Enter your email"/>
      <SpanStyle style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{emailError}</SpanStyle>
     </InputPStyle>

    <br/>
    <InputPStyle>
    <LabelStyle className="floatLabel">Enter Password </LabelStyle>
    <InputStyle type="text"
          value={password}
          placeholder=" Enter your password"
          onBlur={(e) => validate(e.target.value)}/>
           <br />
        <SpanStyle style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{errorMessage}</SpanStyle>
    </InputPStyle>
    <Button disabled={
      !nameError
       ||!email 
       ||!password 
       || !!nameError 
       || !!emailError 
       || !!errorMessage} 
    title="submit" 
    variant="p"
    onClick={() => {
      
    }}

    />
    </FormStyle>
    </BodyStyle>
   
    )
}
// styling
const BodyStyle = styled.div`
font-family: sans-serif;
font-size: 10px
`

const FormStyle = styled.form`
background: #fff;
padding: 4em 4em 2em;
max-width: 400px;
margin: 50px auto 0;
box-shadow: 0 0 1em #222;
border-radius: 2px;
`
const HStyle = styled.h1`
margin:0 0 50px 0;
font-family: Georgia, 'Times New Roman', Times, serif;
padding:10px;
text-align:center;
font-size:30px;
color:#384047;
border-bottom:solid 1px #e5e5e5;
`
const InputPStyle = styled.p`
margin: 0 0 3em 0;
position: relative;
`
const LabelStyle = styled.label`
position: absolute;
left: 8px;
top: 12px;
color: #999;
font-size: 16px;
display: inline-block;
padding: 4px 10px;
font-weight: 400;
background-color: rgba(255,255,255,0);
@include transition(color .3s, top .3s, background-color .8s);
&.floatLabel{
  top: -11px;
  background-color: white;
  font-size: 14px;
}
}

`
const InputStyle = styled.input`
display: block;
box-sizing: border-box;
width: 100%;
height: 50px;
outline: none;
// border:none;
// border-bottom:2px solid black;
margin:0;
`
const SpanStyle = styled.span`
display:block;
padding: 2px 5px;
`
// styling
export {Register};