import React from 'react'

const Button = (props) => {
    return (
        <button
            
            onClick={props.onclickHandler}
           
            >
                {props.text}
            </button>
    )
}

export default Button
