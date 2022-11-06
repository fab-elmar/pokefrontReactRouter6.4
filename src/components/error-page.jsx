import { useRouteError } from "react-router-dom"

import React from 'react'

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div><h1>Ooopsi!</h1>
            <img src="../src/assets/those-damned-pokemons.gif"></img>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>

        </div>
    )
}

export default ErrorPage