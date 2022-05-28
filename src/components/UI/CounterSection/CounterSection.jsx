
//import React from 'react'
//import { Link } from 'react-router-dom'

import { Button } from "../Button/Button"
import { Content } from "../Content/Content"
import  { useEffect, useState } from "react";
import { TitlePage } from "../TitlePage/TitlePage";
import { Logo } from "../Logo/Logo";

//import { Ancla } from '../Ancla/Ancla'

export const CounterSection = () => {
    const [counter, setCounter] = useState(0)
    
    const increase = () => {
        // Counter state is incremented
        setCounter(counter + 10)
    }
    
    const decrease = () => {
        // Counter state is decremented
        setCounter(counter - 10)
    }
    const restart = () => {
        // Counter state is decremented
        setCounter(0)
    }
    useEffect (()=>{
        if(counter>=100){
            document.getElementById("image").style.filter="none";
        }else{
            document.getElementById("image").style.filter="grayscale()";
        }

    },[counter])

    return (
        <div className="action">
            <TitlePage  diseño={"title_count"} textPrincipal="Contador Manual" />
            <div><Content id="contenido" diseño={"content"}  text={counter} /></div>
            <Logo id="image"/>
            <nav>
                <Button style="add" action={decrease} text={"⏪"} />
                <Button style="add" action={restart} text={"🔄"} />
                <Button style="add" action={increase} text={"⏩"} />
            </nav>
        </div>

    )
}
