import { useEffect, useState } from 'react'
import { Characters } from '../../layout/Characters/Characters.jsx'
import { Section_RickAnd_Morty } from '../../layout/Section_RickAnd_Morty/Section_RickAnd_Morty.jsx'


export const RickAndMorty = () => {
   
    const inicialurl = "https://rickandmortyapi.com/api/character"
    const [carta, setCarta] = useState([])
    const seeker = document.getElementById("search-for")
    const url_seeker = "https://rickandmortyapi.com/api/character/?name=";
   

    const fetchCharacters = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => setCarta(data.results))
    }

    useEffect(() => {
        fetchCharacters(inicialurl)
    }, [])

    const obtain_value = () => {
        fetch(url_seeker + seeker.value)
            .then(response => response.json())
            .then(data => setCarta(data.results))

    }

    return (
        <div className='input_rick'>
            <Section_RickAnd_Morty id="search-for" action={obtain_value} />
            <br />
            <Characters cartas={carta} />
        </div >

    )
}
