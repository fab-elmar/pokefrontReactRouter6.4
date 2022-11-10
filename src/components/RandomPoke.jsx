import React from 'react'
import lodash from 'lodash'




const RandomPoke = ({ rPoke }) => {
  console.log(rPoke)
  const imgsrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${rPoke.id}.png`

  return (
    <div className="card card-side .w-full glass">
      <figure><img src={imgsrc} alt="car!" width="120" /></figure>
      <div className="card-body">
        <h2 className="card-title">{rPoke.name.english}</h2>

        <span><h2>{rPoke.type.join(', ')}</h2><h2>Base:</h2>{Object.keys(rPoke.base).map((key, index) => {
          return (
            <div key={index}>
              <p>
                {key}: {rPoke.base[key]}
              </p>

              <hr />
            </div>
          );
        })}</span>
      </div>
    </div>


  )
}

export default RandomPoke