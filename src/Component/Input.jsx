import React from 'react';

function Input(props) {
    return (
        <div className='inputstyle'>
            <input 
            {...props} 
            type={props.type || "text"}/>
        </div>
    )
}

export default Input