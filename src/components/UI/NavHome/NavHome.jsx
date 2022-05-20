//import React from 'react'
import { Link } from 'react-router-dom'

//import { Button } from "../Button/Button"


//import { Ancla } from '../Ancla/Ancla'


export const NavHome = () => {

    return (


        <nav className='NavHome'>
            <Link className='ancla' to="/">Home</Link>
            <Link className='ancla' to="/UseState">UseState</Link>
            <Link className='ancla' to="/useCustom">UseCustom</Link>
            <Link className='ancla' to="/rickandMorty">RickAndMorty</Link>

        </nav>

    )
}
 /**
<nav className='NavHome'>
<div>

           <Button accion={""} text={"UseState"} />
           <Button accion={""} text={"UseCustom"} />
           <Button accion={""} text={"RickAndMorty"} />
       </div>

</nav>
*/