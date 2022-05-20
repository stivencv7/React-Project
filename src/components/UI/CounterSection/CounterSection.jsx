
//import React from 'react'
//import { Link } from 'react-router-dom'

import { Button } from "../Button/Button"
import { Content } from "../Content/Content"
import React, { useState } from "react";
import { TitlePage } from "../TitlePage/TitlePage";

//import { Ancla } from '../Ancla/Ancla'




export const CounterSection = () => {
    const [counter, setCounter] = useState(0)

    const increase = () => {
        // Counter state is incremented
        setCounter(counter + 1)
    }
    const decrease = () => {
        // Counter state is decremented
        setCounter(counter - 1)
    }
    const restart = () => {
        // Counter state is decremented
        setCounter(0)
    }
    return (
        <div className="action">
            <TitlePage diseño={"title_count"} textPrincipal="Contador Manual" />
            <div><Content diseño={"content"} text={counter} /></div>
            <nav>
                <Button stylo="add" action={decrease} text={"⏪"} />
                <Button stylo="add" action={restart} text={"🔄"} />
                <Button stylo="add" action={increase} text={"⏩"} />
            </nav>
        </div>

    )
}
