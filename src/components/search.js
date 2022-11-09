
export default function search(searchTerm, pokes) {


    return pokes.find((poke) => {
        return poke.name.english.toLowerCase().trim().includes((searchTerm) ? searchTerm.toLowerCase() : 0)
    })

}

