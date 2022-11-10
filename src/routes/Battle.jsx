import React, { useState } from "react"
import '../css/Battle.css'
import axios from 'axios';
import { useLoaderData, Link } from "react-router-dom";
import RandomPoke from "../components/RandomPoke";
import { sample } from "lodash";
import Searchresult from "../components/Searchresult";
import Searchbar from "../components/Searchbar";
import search from "../components/search";
import useForceUpdate from "use-force-update";

export async function loader({ request }) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("query");
  const pokes = await axios.get("https://pokeback-vbf.herokuapp.com/pokemon").then(response => response.data)
  return { pokes, searchTerm }

}

function Battle() {
  const [fight, setFight] = useState(false)
  const { pokes, searchTerm } = useLoaderData();
  const rPoke = sample(pokes);
  const found = (search(searchTerm, pokes))
  const forceUpdate = useForceUpdate();
  console.log(found)
  return (
    <div className="pika">
      <div className="container"  >
        <h1>Battle</h1>
        <div className="choose">
          <div className="dog">
            <span className="tittle">Choose your Pokemon</span>
            <div className="searchpoke">
              <Searchbar />
            </div>

            <div className="searchtype">searchtype</div>
            <button onClick={forceUpdate} className="btn w-32 mix-blend-color-burn fgap-2">
              Random Poke 🔀

            </button>
          </div>
          <div className="choose">
            {(!searchTerm) ? <RandomPoke rPoke={rPoke} /> : <Searchresult found={found} />}

          </div>

        </div>
      //  <Link to={`../pokemon/fight/${(found ? found.id : rPoke.id)}`}>
          <button className="startfight place-content-center">Start Fight</button>
        </Link>

      </div>
    </div>
  )
}

export default Battle
