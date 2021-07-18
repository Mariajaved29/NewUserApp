import React from 'react'

function UseAuthContainer() {
    const signup = async (name, email, password) => {
    const data = await axios.post("API",{
        username: 
        name,
        email,
        password
    })
    }
    return 
    {
        createUser: signup
    }
}

export default UseAuthContainer;