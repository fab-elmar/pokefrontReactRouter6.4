import React from 'react'
import { useLoaderData, Link } from 'react-router-dom';
import loaderFuntions from '../utils/loaderFuntions'
import axios from 'axios'



export async function Allloader() {
    const pokes = await axios.get("https://pokeback-vbf.herokuapp.com/pokemon").then(response => response.data)
    return { pokes }
}

export const AllPokes = () => {
    const { pokes } = useLoaderData();
    console.log(pokes)


    const searchTerm = 'Venusaur'
    console.log(pokes.filter((poke) => {
        return poke.name.english.toLowerCase().trim().includes(searchTerm)

    }));




    return (<>
        <div>AllPokes</div>
        <ol>
            {pokes.map((p) => (
                <li key={p.id}> <Link to={`../pokemon/${p.id}`}>{p.name.english} </Link></li>
            )
            )}
        </ol>
    </>
    )
}
