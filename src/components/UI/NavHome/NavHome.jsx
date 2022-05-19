import React from 'react'
import { Ancla } from '../Ancla/Ancla'

export const NavHome = () => {
    return (
        <nav className='NavHome'>
            <Ancla stylo="ancla" reference="https://google.com" textAncla="Home" />
            <Ancla stylo="ancla" reference="https://google.com" textAncla="About" />
            <Ancla stylo="ancla" reference="https://google.com" textAncla="Home" />
        </nav>

    )
}
