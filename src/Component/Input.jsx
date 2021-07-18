import styled from 'styled-components';


const Input = ({title,onChange,...props}) => {
    return (
        <div>
        {title ?
        <label>
            {title}
        </label>
        :null}
        <input
            {...props} 
            style={{
          ...props.style,
        }}
            type={props.type || "text"}
            onChange={(e) => {
                onChange(e.target.value)
            }}
            />
            </div>
    )

}


export default Input