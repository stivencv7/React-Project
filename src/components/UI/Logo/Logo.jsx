import React from 'react';
import logo from '../../../images/alu.jpg'
export const Logo = ({id}) => {
    return (
        <img id={id} className='logo' src={logo} alt="logo" />
    )
}
