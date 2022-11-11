import { useState, useEffect, useRef } from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import '../fight.css'
import { sample } from "lodash";
import { start, damage, attack, doDamage } from "../utils/GameLogic"

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


  //Logic 
  const [playerHp, setplayerHp] = useState(poke.base.HP)
  const [compuHp, setCompuHp] = useState(compu.base.HP)
  const { nd1, nd2 } = start(poke, compu)
  const [round, setround] = useState(1);
  const { attacker, defender } = attack(round, nd1, nd2)



  console.log(round)
  console.log('att', attacker)
  console.log('def', defender)
  console.log(damage(attacker, defender))
  damage(attacker, defender)



  const didMountRef = useRef(false);

  useEffect(() => {


    if (didMountRef.current) {
      (doDamage(defender, poke, attacker, playerHp, compuHp, setCompuHp, setplayerHp))
      return () => {
        console.log('idontlike pokes', compuHp, playerHp), compuHp, playerHp
      }
    } else {
      didMountRef.current = true;
    }

  }, [round]);

  /* useEffect(() => {
    console.log(doDamage(defender, poke, attacker, playerHp, compuHp, setCompuHp, setplayerHp))

    return () => {
      console.log('idontlike pokes', compuHp, playerHp)
    }
  }, [round])

 */
  function Fight1() {

    return (
      <>

        <div className='fight flex'>
          <h1 className='flex justify-center text-2xl mt-8'>Round {round}</h1>
          <h1 className='flex justify-center text-2xl mt-8'>Fight!</h1>
          <div className='flex place-content-around mt-8'>
            <div className="text-center">
              <h1>{poke.name.english}</h1>
              <img className='player1_pic' src={imgurl} width="300" />
            </div>
            <label className="swap swap-flip text-9xl">


              <input type="checkbox" />

              <div className="swap-on text-sm text-center"><div className="text-indigo-700 text-lg">{nd1.name.english} </div>is faster</div>
              <div className="swap-off text-red-700 text-base "> Click to see who <br />has the first strike</div>
            </label>
            <div className="text-center">
              <h1>{compu.name.english}</h1>
              <img className='player2_pic' src={imgurl2} width="300" />
            </div>
          </div>
          <div className='flex place-content-around mt-8'>
            <progress className="progress w-56" value={playerHp} max={poke.base.HP}></progress>
            <progress className="progress w-56" value={compuHp} max={compu.base.HP}></progress>
          </div>
          <div className='flex justify-center'>
            <button onClick={() => { attack(), setround(round => round + 1) }} className='btn mt-8 w-40'>Attack!</button>
          </div>
        </div>
      </>
    )
  }


  return (
    <>{(compuHp <= 0 || playerHp <= 0) ? <img src="https://i.makeagif.com/media/8-24-2016/kIZ_52.gif" width="1480" /> : <Fight1 />}</>
  )
}