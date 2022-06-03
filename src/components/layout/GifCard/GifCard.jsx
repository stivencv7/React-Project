import React from 'react'

export const GifCard = ({ cardGif = [] }) => {
    return (
        <div className='conter_cardgif'>
            {
                cardGif.map((item, index) => (
                    <div key={index} >
                        <div className='car'>
                            <img className='img-cardGif' src={item.media[0].mediumgif.url} alt="" />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
