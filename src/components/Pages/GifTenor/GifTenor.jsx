import React, { useEffect, useState } from 'react'
import { GifCard } from '../../layout/GifCard/GifCard'
import { Section_RickAnd_Morty } from '../../layout/Section_RickAnd_Morty/Section_RickAnd_Morty'



export const GifTenor = () => {

    const [parametro, setParametro] = useState([])


    const search = (event) => {
        const url = "https://g.tenor.com/v1/search?"
        const key = "DIPV6GWNNIH9"
        const query = `q=${event.target.value}`
        const limit = "&limit=10";
        fetch(`${url}${query}&key=${key}${limit}`)
            .then(response => response.json())
            .then(data => setParametro(data.results))
    }

    function getGif() {

        const url = "https://g.tenor.com/v1/trending?"
        const key = "DIPV6GWNNIH9"
        const limit = "&limit=10";
        fetch(`${url}&key=${key}${limit}`)
            .then(response => response.json())
            .then(data => setParametro(data.results))
    }

    useEffect(() => {
        getGif()
    }, [])


    return (
        <div>
            <Section_RickAnd_Morty action={search} id="input_gif" />
            <GifCard cardGif={parametro} />
        </div>
    )
}
