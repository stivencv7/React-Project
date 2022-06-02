import React from 'react'
import emailjs from '@emailjs/browser'
import imagen from '../../../images/carta.jpg'

export const Send = () => {

    const sendEmail = (event) => {
        event.preventDefault()
        emailjs.sendForm("service_vk9w38k", "template_igaudh6", event.target, "GscOVZmCg7uho89y1")
            .then(response => evaluar(response.status))

    }

    function evaluar(element) {
        if (element == 200) {
            alert("mensaje enviado con exito")
        } else {
            alert("error no se pudo enviar el mensaje")
        }
    }


    return (

        <>
            <h1 className='title-form'>Contact</h1>

            <div className='content-father'>


                <div><img src={imagen} alt="imagen" className='carta' /></div>

                <div className='div-formulario'>
                    <form id='hola' className='form-email' onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" className='input-name' />
                        <hr />

                        <label >Email</label>
                        <input type="email" name="user_email" className='input-name' />
                        <hr />


                        <textarea name="user_message" id="" cols="30" rows="10" placeholder='message'></textarea>
                        <hr />
                        <button>Send</button>
                    </form>
                </div>

            </div>
        </>
    )

}
