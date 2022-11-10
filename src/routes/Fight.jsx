import React from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import '../fight.css'

export async function fightLoader() {
    const poke = await axios.get(`https://pokeback-vbf.herokuapp.com/pokemon/`).then(response => response.data)
    console.log(poke)
    return { poke }
}

export default function Fight() {
  const { poke } = useLoaderData();
  const imgurl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png`
  const imgurl2 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png`
  return (
    <>
        <h1 className=''>Fight!</h1>
        <div className='fightBox flex place-content-around'>
          <div className="player1 flex justify-center">
            <h1>{poke[46].name.english}</h1> 
            <img className='player1_pic' src={imgurl} width="300" />
          </div>
          <div className="player2 justify-center">
            <h1>{poke[13].name.english}</h1>
            <img className='player2_pic' src={imgurl2} width="300" /> 
          </div>
        </div>
        <div className='flex place-content-around'>
          <progress className="progress w-56" value="100" max="100"></progress>
          <progress className="progress w-56" value="100" max="100"></progress>
        </div>
        <button className='btn flex justify-center'>Attack!</button>
    </>
    )
}