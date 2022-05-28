import React from 'react'

export const Characters = ({ cartas = [] }) => {
    return (
        <div id='car' className='conter_car' >
            {
                cartas.map((item, index) => (
                    <div key={index} >
                        <div className='car'>
                            <img className='img-card' src={item.image} alt="" />
                            <h2 className='name-card'>{item.name}</h2>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Characters;