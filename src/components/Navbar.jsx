import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {

    return (

        <div className="navbar bg-base-100">
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>
            <div className="flex-1">
            <NavLink className="btn btn-ghost normal-case text-xl"
                    to="home">
                    Home
                </NavLink>
                
                <NavLink className="btn btn-ghost normal-case text-xl"
                    to="pokemons">
                    All Pokes
                </NavLink>
                <NavLink className="btn btn-ghost normal-case text-xl"
                    to="battle">
                    Battle Area
                </NavLink>
                <NavLink className="btn btn-ghost normal-case text-xl"
                    to="">
                    Fast Fight
                </NavLink>
                <NavLink className="btn btn-ghost normal-case text-xl"
                    to="">
                    Hight Scores
                </NavLink>
            </div>
        </div>


    )
}


