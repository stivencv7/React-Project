//import React from 'react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'



//import { Button } from "../Button/Button"


//import { Ancla } from '../Ancla/Ancla'


export const NavHome = () => {
    const [moderDark, setModerDark] = useState(false)
    const [title, setTitle] = useState("on")

    const handleOn = () => {
        setModerDark(!moderDark);
    }

    useEffect(() => {
        if (moderDark) {
            //document.body.classList.remove("light-mode")
            //document.body.classList.add('dar-mode')
            document.body.style.backgroundColor = "black"

            setTitle('Claro')
        } else {
            //document.body.classList.remove("dar-mode")
            //document.body.classList.add('light-mode')
            document.body.style.backgroundColor = "white"
            setTitle('Oscuro')
        }

    }, [moderDark])

    return (


        <nav className='NavHome'>
            <Link className='ancla' to="/">Home</Link>
            <Link className='ancla' to="/UseState">UseState</Link>
            <Link className='ancla' to="/useCustom">UseCustom</Link>
            <Link className='ancla' to="/rickandMorty">RickAndMorty</Link>
            <Link className='ancla' to="/send">Contact us</Link>
            <Button style="ad" action={handleOn} text={title} />
            <Link className='ancla' to="/configuracion">⚙️</Link>

        </nav>

    )
}