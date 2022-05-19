import React from 'react'
import { Link } from 'react-router-dom'
//import { Ancla } from '../Ancla/Ancla'


export const NavHome = () => {
    return (

        <nav className='NavHome'>
            <Link className='ancla' to="/">Home</Link>
            <Link className='ancla' to="/about">AboutUS</Link>
            <Link className='ancla' to="/contact">Contact</Link>

        </nav>

    )
}
