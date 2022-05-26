import React from 'react'

export const Content = ({ diseño,text,id }) => {
    return (
        <p className={diseño} id={id}>{text}</p>
    )
}
