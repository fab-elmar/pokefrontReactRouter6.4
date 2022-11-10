/* Psychic
Base:
HP: 25

Attack: 20

Defense: 15

Sp.Attack: 105

Sp.Defense: 55

Speed: 90
// Game Logic Pseudo Code
//START-> the faster attacks first (if poke a.speed > b.speed)

                    const [ playing, setPlaying ] = useState()

                    useEffect(() => {
                        setPlaying(start(poke, compu))
                    }, [])

                    


                    function 
// if a its faster attack else wait attack  (b attack)
//A tacks
 b(HP  +Defens)  -   Damage
// 
                    
                             function gameOver(poke, compu) {
                                if (poke.HP <= 0) {
                                    return compu.name.english wins;
                                } else if (compu.HP <= 0) {
                                    return (poke);
                                } else {
                                    return false;
                                }
                            }


//first Attack 

 function calculateDamage(attacker, defender, move) {
     let damage = (((2 * attacker / 5 + 2) * move.power * (attacker.attack / defender.defense)) / 50) + 2;
     return damage;
 }
 */





/* let damage = (((2 * ATT20 / 5 + 2) * (spAttack / 2) * (att / defens)) / 50) + 2;

console.log(damage)
 */

function start(poke, compu) {
    if (poke.base.Speed >= compu.base.Speed) {
        const nd1 = poke
        const nd2 = compu
        return { nd1, nd2 }
    } else {
        const nd1 = compu
        const nd2 = poke
        return { nd1, nd2 }

    }
}


export { start }



// Move counter 

// when you die

// if u win?  you get new back hp and you get new oponnent