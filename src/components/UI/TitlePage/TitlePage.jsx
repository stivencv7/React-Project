import React from 'react'

export const TitlePage = ({ diseño, textPrincipal = "Mubles Valencia" }) => {
    return (
        <h1 className={diseño}>{textPrincipal}</h1>
    )
}
