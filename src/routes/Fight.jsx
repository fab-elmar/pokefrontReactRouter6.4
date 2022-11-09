import React from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import '../fight.css'

export async function fightLoader() {
    const poke = await axios.get(`https://pokeback-vbf.herokuapp.com/pokemon/`).then(response => response.data)
    console.log(poke)
    return { poke }
}

export default function BattleComponent() {
    const [playerOneCardsRemaining, setPlayerOneCardsRemaining] = useState(initialPlayerOneCards);
    const [playerTwoCardsRemaining, setPlayerTwoCardsRemaining] = useState(initialPlayerTwoCards);
    const [playerOnePokemon, setPlayerOnePokemon] = useState(playerOneCardsRemaining[0]);
    const [playerTwoPokemon, setPlayerTwoPokemon] = useState(playerTwoCardsRemaining[0]);
    const [activePlayer, setActivePlayer] = useState();
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        setActivePlayer(calculateActiveAttackingPlayer(playerOnePokemon, playerTwoPokemon));
    }, []);

    function calculateActiveAttackingPlayer(pokemon1, pokemon2) {
        if (pokemon1.speed > pokemon2.speed) {
            return 1;
        } else if (pokemon2.speed > pokemon1.speed) {
            return 2;
        } else {
            return Math.random() < 0.5 ? 1 : 2;
        }
    }

    function calculateDamage(attacker, defender, move) {
        let damage = (((2 * attacker.level / 5 + 2) * move.power * (attacker.attack / defender.defense)) / 50) + 2;
        return damage;
    }

    function updateHealth(pokemon, damage) {
        pokemon.health -= damage;
    }

    function checkIfGameOver(pokemon1, pokemon2) {
        if (pokemon1.health <= 0 && pokemon2.health <= 0) {
            return 'draw';
        } else if (pokemon1.health <= 0) {
            return pokemon2;
        } else if (pokemon2.health <= 0) {
            return pokemon1;
        } else {
            return false;
        }
    }

    function pokemonBattle(pokemon1, pokemon2) {
        let activePlayer = calculateActiveAttackingPlayer(pokemon1, pokemon2);
        let gameOver = false;
        while (!gameOver) {

        }
    }

    function processAttack() {
        let damage = calculateDamage(playerOnePokemon, playerTwoPokemon, playerOnePokemon.moves[0]);
        updateHealth(playerTwoPokemon, damage);
        let gameOver = checkIfGameOver(playerOnePokemon, playerTwoPokemon);
        if (gameOver) {
            setGameOver(true);
            setWinner(gameOver);
        }
    }

    return (
        <div>
            <h1>Battle</h1>
            {gameOver && <h2>{winner === 'draw' ? 'Draw' : `${winner.name} wins!`}</h2>}
            <div className="row">
                <div className="col-6">
                    <PokemonCard pokemon={playerOnePokemon} />
                </div>
                <div className="col-6">
                    <PokemonCard pokemon={playerTwoPokemon} />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                   {/* simple attack button */}
                   <button className="btn btn-primary" onClick={processAttack}>Attack</button>
                </div>
            </div>
        </div>
    );
}
