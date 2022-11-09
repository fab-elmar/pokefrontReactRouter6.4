export default function search(searchTerm, pokes) {
    pokes
        .map((poke) => poke)
        .filter((poke) => {
            return poke.name.toLowerCase().trim().includes(searchTerm)

        });

    return XX;
}