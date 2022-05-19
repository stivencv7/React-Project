import React from 'react'

export const TitlePage = ({ diseño, textPrincipal = "Mi Primer pagina" }) => {
    return (
        <h1 className={diseño}>{textPrincipal}</h1>
    )
}
