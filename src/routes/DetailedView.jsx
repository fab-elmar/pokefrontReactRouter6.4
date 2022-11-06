import React from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios '


export async function detailLoader({ params }) {
    const poke = await axios.get(`https://pokeback-vbf.herokuapp.com/pokemon/${params.id}`).then(response => response.data)
    return { poke }
}


export const DetailedView = () => {
    const { poke } = useLoaderData();

    const imgurl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`

    return (<>
        <div>DetailedView</div>
        <h1>{poke.name.english}</h1>  <span><h2>Type: {poke.type}</h2></span>
        <h1>{poke.name.chinese}</h1>
        <span><h2>Base:</h2>{Object.keys(poke.base).map((key, index) => {
            return (
                <div key={index}>
                    <p>
                        {key}: {poke.base[key]}
                    </p>

                    <hr />
                </div>
            );
        })}</span>
        <img src={imgurl} width="600" />
    </>
    )
}
