import React from "react"
import '../css/Battle.css'
import axios from 'axios';
import { useLoaderData } from "react-router-dom";
import RandomPoke from "../components/RandomPoke";
import { sample } from "lodash";


export async function loader() {
  const pokes = await axios.get("https://pokeback-vbf.herokuapp.com/pokemon").then(response => response.data)
  return { pokes }
}
function Battle() {
  const { pokes } = useLoaderData();
  const rPoke = sample(pokes);

  return (
    <div className="container"  >

      <h1>Battle</h1>
      <div className="choose">
        <div className="dog">
          <span className="tittle">Choose your Pokemon</span>
          <div className="searchpoke">search poke</div>

          <div className="searchtype">searchtype</div>
        </div>
        <div className="choose">
          <RandomPoke rPoke={rPoke} />

        </div>
      </div>

      <button className="startfight place-content-center">Start Fight</button>
    </div>
  )
}

export default Battle