import React from 'react';



function Input(props) {
    return (
        <input
            {...props} 
            type={props.type || "text"} />
    )
}

export default Input