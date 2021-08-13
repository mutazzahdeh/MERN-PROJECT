import React from 'react'

const Button = (props) => {
    return (
        <button
            style={props.style}
            onClick={props.onclickHandler}
           
            >
                {props.text}
            </button>
    )
}

export default Button
