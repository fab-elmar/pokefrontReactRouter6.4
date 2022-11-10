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

    return(
        <> 
        <h2 class="text-8xl tracking-wider font-bold tracking-tight text-black text-center pt-5 leading-relaxed bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500">ALL POKES</h2>
        <div className='flex-wrap  flex justify-between items-center p-14 px-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 '>
            {pokes.map((p) => <div className='drop-shadow-lg border rounded-lg mb-2.5 p-4 flex flex-col items-center bg-center bg-cover bg-[url("https://wallpaperaccess.com/full/271163.jpg")]'>
            <img className='h-[400px]' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`}/>
            <h3 className='w-[400px] uppercase font-bold text-xl leading-relaxed text-center'><div key={p.id}><li> <Link to={`../pokemon/${p.id}`}>{p.name.english} </Link></li><li>Type: {p.type}</li></div></h3>
            </div>
            )
            }  

        </div>
        </>
        )


}
