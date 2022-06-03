
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'

export const NavHome = () => {
    const [moderDark, setModerDark] = useState(false)
    const [title, setTitle] = useState("on")

    const handleOn = () => {
        setModerDark(!moderDark);
    }

    useEffect(() => {
        if (moderDark) {
            
            document.body.style.backgroundColor = "black"

            setTitle('Claro')
        } else {
            
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
            <Link className='ancla' to="/gifTenor">Gif</Link>
            <Button style="ad" action={handleOn} text={title} />
            <Link className='ancla' to="/configuracion">⚙️</Link>

        </nav>

    )
}