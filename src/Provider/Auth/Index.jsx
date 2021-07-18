import React from 'react';
import {AuthContext} from './Context'


const AuthProvider = (props) => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    // const [registerUser, setregisterUser] = React.useState("");
    const {createUser} = UseAuthContainer;

    const providerValues = {
        name,
        email,
        password,
        setName: () => {},
        setEmail:() => {},
        setPassword:() => {},
        // registerUser,

    }

    return (
    <AuthContext.provider>
    {props.children}
    </AuthContext.provider>
    )
}
export {AuthProvider};
