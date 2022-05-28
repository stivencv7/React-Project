import React from 'react'

export const Characters = ({ cartas = [] }) => {
    return (
        <div id='car'>
            {
                cartas.map((item, index) => (
                    <div key={index}>
                        <div>
                            <img src={item.image} alt="" />
                            <h2>{item.name}</h2>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Characters;