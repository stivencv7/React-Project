import React from 'react'

export const Button = ({ id, disabled, text, action, style }) => {
    return (
        <button id={id} disabled={disabled} className={style} onClick={action}>{text}</button>
    )
}
