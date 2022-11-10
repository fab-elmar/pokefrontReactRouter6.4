import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import '../fight.css'
import { sample } from "lodash";
import { start } from "../utils/GameLogic"

export async function fightLoader({ params }) {
  const poke = await axios.get(`https://pokeback-vbf.herokuapp.com/pokemon/${params.id}`).then(response => response.data)
  const pokes = await axios.get("https://pokeback-vbf.herokuapp.com/pokemon").then(response => response.data)
  return { poke, pokes }
}

/* useEffect(() => {
  setActivePlayer(calculateActiveAttackingPlayer(, playerTwoPokemon));
}, []);
 */
export default function Fight() {
  const { poke, pokes } = useLoaderData();
  const [compu, setCompu] = useState(sample(pokes))

  const imgurl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`
  const imgurl2 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${compu.id}.png`
  const [playerHp, setplayerHp] = useState(poke.base.HP)

  //Logic 
  /*   start(poke, compu) */

  return (
    <>
      {/*  {console.log(start(poke, compu))} */}
      <div className='fight flex'>
        <h1 className='flex justify-center text-2xl mt-8'>Fight!</h1>
        <div className='flex place-content-around mt-8'>
          <div className="text-center">
            <h1>{poke.name.english}</h1>
            <img className='player1_pic' src={imgurl} width="300" />
          </div>
          <label className="swap swap-flip text-9xl">


            <input type="checkbox" />

            <div className="swap-on text-sm">{/* {nd1.name.english} */}how hast the first strike</div>
            <div className="swap-off "> </div>
          </label>
          <div className="text-center">
            <h1>{compu.name.english}</h1>
            <img className='player2_pic' src={imgurl2} width="300" />
          </div>
        </div>
        <div className='flex place-content-around mt-8'>
          <progress className="progress w-56" value={playerHp} max={poke.base.HP}></progress>
          <progress className="progress w-56" value="100" max="100"></progress>
        </div>
        <div className='flex justify-center'>
          <button onClick={() => setplayerHp(playerHp - 10)} className='btn mt-8 w-40'>Attack!</button>
        </div>
      </div>
    </>
  )
}