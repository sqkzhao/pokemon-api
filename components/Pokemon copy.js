import React, {useState, useEffect} from 'react'

const Pokemon = () => {
    const [pokeState, setPokeState] = useState({
        names: [],
        offset: 0
    })
    const onClickHandler = (e) => {
        
    }
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=${pokeState.offset}&limit=20`)
        .then(response => {
            return response.json()
        })
        .then(response => {
            console.log(response)
            let pokeNames = response.results.map((item) => {
                return item.name
            })
            setPokeState({
                names: pokeNames,
                offset: pokeState.offset + 20
            })
        })
        .catch(err => {
            console.log(err)
        })
    }, [pokeState.names])
    return (
        <div>
            <input type="button" value="Fetch Pokemon" onClick={onClickHandler}/>
            {/* <ul>
                {pokeState.names.map((pokeName, i) => 
                    <li key={i}>{pokeName}</li>
                )}
            </ul> */}
        </div>
    )
}
export default Pokemon