import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    let activeStyle = {
        textDecoration: "underline",
    };

    let activeClassName = "underline";
    return (

        <div className="navbar bg-base-100">
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>
            <div className="flex-1">
                <NavLink className="btn btn-ghost normal-case text-xl"
                    to="pokemons"

                >
                    All Pokes
                </NavLink>
                <a >daisyUI</a>
            </div>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </button>
            </div>
        </div>


    )
}




{/* <nav>
                <ul>
                    <li>
                        <NavLink
                            to="pokemons"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            All Pokes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? activeClassName : undefined
                            }
                        >
                            HERO
                        </NavLink>
                    </li>

                </ul>
            </nav>


         */}
