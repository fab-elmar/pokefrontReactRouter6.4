import React from "react"
import '../css/Battle.css'


function Battle() {
    return (
    <div className="container"  >
      
      <h1>Battle</h1>
      <div className="choose">
        <div className="select">
          <span className="tittle">Choose your Pokemon</span>
          <div className="searchpoke">search poke</div>
          <div className="randompoke">randompoke</div>
          <div className="searchtype">searchtype</div>
        </div>
        <div className="choose">
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        </div>
      </div>
      
      <button className="startfight place-content-end">Start Fight</button>
    </div>
    )
  }
  
  export default Battle