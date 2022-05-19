import React from 'react'

export const Ancla = ({ stylo, reference, textAncla }) => {
    return (
        <a className={stylo} href={reference}>{textAncla}</a>
    )
}
