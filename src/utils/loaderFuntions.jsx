// this component is not in use




export default function loaderFuntions() {
    const getAllPokes = async () => {
        try {
            const result = await fetch("https://pokeback-vbf.herokuapp.com/pokemon");
            const pokes = result.json
            return { pokes }
        }
        catch {
            console.error(error.message)
        }

    }
    return { getAllPokes }
}




