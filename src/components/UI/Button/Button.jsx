import React from 'react'

export const Button = ({ text, action, stylo }) => {
    return (
        <button className={stylo} onClick={action}>{text}</button>
    )
}
