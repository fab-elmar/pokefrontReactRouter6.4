
// this is a testfile

import axios from 'axios'
import fetch from "node-fetch"

const getpoke = async () => {
    await axios.get("https://pokeback-vbf.herokuapp.com/pokemon")
        .then(response => {
            const pokes = response.data
            console.log(pokes)

            return pokes
        }
        )
}

console.log(getpoke())


