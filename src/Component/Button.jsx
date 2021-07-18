import styled from 'styled-components';


function Button(title,variant,...props) {
    return (
        <ButtonStyled
        {...props}
        variant={variant}
  
           style={{
               ...props.style,
           } }>
           {title}
          
           </ButtonStyled>
    )
}


const ButtonStyled = styled.button`
    ${({variant, disabled}) => {
        const txtColor = disabled ? "#aaa" :variant === "s" ? green : white;
        const txtColor = disabled ? "#aaa" :variant === "s" ? white : green;
        eturn `
        border-color: ${txtColor};
        background-color: ${bgColor};
        color: ${txtColor};
    `;
    }}
    background-color: #505358;
    box-shadow: 0 3px 0 0 darken($button, 10%);
    border-radius: 10px;
    border: none;
    color: ${txtColor};
    cursor: pointer;
    display: block;
    font-size: 2em;
    line-height: 1.6em;
    margin: 2em 0 0;
    width:100%;
    outline: none;
    padding: .8em 0;
    text-shadow: 0 1px #68B25B;
    &:hover {
        background-color:#384047;
        text-shadow:0 1px 3px darken($button, 30%);
    }
    &:active {
        background-color:#384047
    }
`

export default Button