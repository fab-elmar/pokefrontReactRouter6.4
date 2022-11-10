import React from "react";



const Searchresult = ({ found }) => {
    console.log(found)
    const imgsrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${found.id}.png`

    return (
        <div className="card card-side .w-full glass">
            <figure><img src={imgsrc} alt="car!" width="120" /></figure>
            <div className="card-body">
                <h2 className="card-title">{found.name.english}</h2>

                <span><h2>{found.type.join(', ')}</h2><h2>Base:</h2>{Object.keys(found.base).map((key, index) => {
                    return (
                        <div key={index}>
                            <p>
                                {key}: {found.base[key]}
                            </p>

                            <hr />
                        </div>
                    );
                })}</span>
            </div>
        </div>


    )
}

export default Searchresult