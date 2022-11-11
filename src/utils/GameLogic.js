/*

 function calculateDamage(attacker, defender, move) {
     let damage = (((2 * attacker / 5 + 2) * move.power * (attacker.attack / defender.defense)) / 50) + 2;
     return damage;
 }
 */





/* let damage = (((2 * ATT20 / 5 + 2) * (spAttack / 2) * (att / defens)) / 50) + 2;

 */

const damage = (attacker, defender) => (((2 * attacker.base.Attack / 5 + 2) * (attacker.base.Attack / 2) * (attacker.base.Attack / defender.base.Defense)) / 50);

const attack = (round, nd1, nd2) => {
    if (!(round % 2 == 0)) {
        const attacker = nd1;
        const defender = nd2
        return { attacker, defender }
    } else {
        const attacker = nd2;
        const defender = nd1;
        return { attacker, defender }
    }

}
const doDamage = (defender, poke, attacker, playerHp, compuHp, setCompuHp, setplayerHp) => {
    if (defender.id === poke.id) { setplayerHp(playerHp - damage(attacker, defender)) }
    else { setCompuHp(compuHp - damage(attacker, defender)) }
}
/* 
if (defender.id === poke.id) setplayerHp(playerHp - damage(attacker, defender))
else setCompuHp(compuHp - damage(attacker, defender)) */
//}
/* const doDamage =(defender,poke,compu)=>(defender.name.english===poke.name.english)?set */

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

export { start, damage, attack, doDamage }



// Move counter 

// when you die

// if u win?  you get new back hp and you get new oponnent