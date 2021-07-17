import React from 'react';


const Register = () => {
//    validation sample // const regEmail = /[a,z] / 
// regEmail = (true)
    // const [name, setName] = React.useAuthContext();
    const [name, setName] = React.useState();

    return(
     <>
    <input type="text" value={name} onChange={(e) => {  setName(e.target.value) }} />
    <br/>
    <input type="email" value={name} onChange={(e) => { setName(e.target.value) }} />
    <br/>
    <input type="password" value={name} onChange={(e) => {setName(e.target.value) }}/>
    </>
    )
}

export {Register};