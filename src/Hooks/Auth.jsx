import React from 'react';
import {AuthContext} from '../Provider/Auth/Context';

const UseAuthContext = () => {
    const authData = React.useContext(AuthContext);
    return authData;
}

export {UseAuthContext};