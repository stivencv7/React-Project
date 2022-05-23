//import React from 'react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'



//import { Button } from "../Button/Button"


//import { Ancla } from '../Ancla/Ancla'


export const NavHome = () => {
    const [moderDark,setModerDark]=useState(false)
    const[title,setTitle]=useState("on")
    //const body=document.getElementById("color")
    //let colo=document.getElementById("input_color")
   /** function select(){
        body.style.background = colo.value;
    }*/
    const handleOn=()=>{
        setModerDark(!moderDark);
    }
    
    useEffect(()=>{
        if(moderDark){
            document.body.classList.remove("light-mode")
            document.body.classList.add('dar-mode')
            setTitle('on')
        }else{
            document.body.classList.remove("dar-mode")
            document.body.classList.add('light-mode')
            setTitle('off')
          
        }
        
    },[moderDark])

    return (


        <nav className='NavHome'>
            <Link className='ancla' to="/">Home</Link>
            <Link className='ancla' to="/UseState">UseState</Link>
            <Link className='ancla' to="/useCustom">UseCustom</Link>
            <Link className='ancla' to="/rickandMorty">RickAndMorty</Link>

            <Button style="add" action={handleOn} text={title}  />


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