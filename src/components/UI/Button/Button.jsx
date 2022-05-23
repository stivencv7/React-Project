import React from 'react'

export const Button = ({ text, action, style }) => {
    return (
        <button className={style} onClick={action}>{text}</button>
    )
}
