import React, { useEffect, useState } from 'react'
import { BlackMode } from '../../UI/BlackMode/BlackMode'
//import { Content } from "../../UI/Content/Content"

export const SectionSet_up = () => {

    let colo = document.getElementById("input_color")

    const [theme, setTheme] = useState(null)
    const [checbox, setBon] = useState(null)
    const [nul, setNul] = useState(true)

    const handleChangeChecBox = () => {
        setBon(!checbox)
    }

    useEffect(() => {

        if (checbox) {
            console.log("hola")
            setNul(false)

        } else {
            setNul(true)

        }

    }, [checbox])

    const select = () => {
        setTheme(!theme);

    }

    useEffect(() => {
        if (theme) {
            colo.addEventListener('input', e => {
                document.body.style.backgroundColor = e.target.value
            });
        }

    },[theme])

    return (
        <nav className='theme'>
            <h4 className='cont'>tema de fondo</h4>
            <BlackMode desabled={nul} action={select} />
            <input id='habilitar' type='checkbox' onChange={handleChangeChecBox} value={true}></input>


        </nav>

    )
}
