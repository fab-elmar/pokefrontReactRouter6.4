import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    let activeStyle = {
        textDecoration: "underline",
    };

    let activeClassName = "underline";
    return (
        <div><h2>i am a Navbar</h2>
            <nav>
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


        </div>
    )
}
