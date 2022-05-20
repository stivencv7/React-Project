import React from 'react'

export const Button = ({ text, accion, stylo }) => {
    return (
        <button className={stylo} onClick={accion}>{text}</button>
    )
}
