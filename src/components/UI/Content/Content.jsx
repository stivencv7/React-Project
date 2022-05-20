import React from 'react'

export const Content = ({ diseño, text }) => {
    return (
        <p className={diseño} id='contenido'>{text}</p>
    )
}
