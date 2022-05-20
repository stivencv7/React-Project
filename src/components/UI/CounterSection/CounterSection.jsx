
//import React from 'react'
//import { Link } from 'react-router-dom'

import { Button } from "../Button/Button"
import { Content } from "../Content/Content"
import React, { useState } from "react";
//import { Ancla } from '../Ancla/Ancla'




export const CounterSection = () => {
    const [counter, setCounter] = useState(0)

    const handleClick1 = () => {
        // Counter state is incremented
        setCounter(counter + 1)
    }
    const handleClick2 = () => {
        // Counter state is decremented
        setCounter(counter - 1)
    }
    const handleClick3 = () => {
        // Counter state is decremented
        setCounter(0)
    }
    return (
        <div className="button_operations">
            <div><Content />{counter}</div>
            <div className="action">
                <Button stylo="add" accion={handleClick2} text={"⏪"} />
                <Button stylo="add" accion={handleClick3} text={"🔄"} />
                <Button stylo="add" accion={handleClick1} text={"⏩"} />

            </div>
        </div>
    )
}
