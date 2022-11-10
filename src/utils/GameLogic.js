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
// if a its faster attack else wait attack  (b attack)
//A tacks
 b(HP  +Defens)  -   Damage
// 
//first Attack 

 function calculateDamage(attacker, defender, move) {
     let damage = (((2 * attacker / 5 + 2) * move.power * (attacker.attack / defender.defense)) / 50) + 2;
     return damage;
 }
 */





let damage = (((2 * ATT20 / 5 + 2) * (spAttack / 2) * (att / defens)) / 50) + 2;

console.log(damage)

    (HP + DE) - Damage



