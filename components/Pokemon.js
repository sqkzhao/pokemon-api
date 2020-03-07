import React, {useState, useEffect} from 'react'

const Pokemon = () => {
    const [pokeState, setPokeState] = useState([])
    const [offsetState, setOffsetState] = useState(-20)
    const onClickHandler = (e) => {
        if (offsetState <= 807) {
            setOffsetState(offsetState + 20)
        }
    }
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offsetState}&limit=20`)
        .then(response => {
            return response.json()
        })
        .then(response => {
            console.log(response.results)
            let pokeNames = response.results.map((item) => {
                return item.name
            })
            setPokeState(
                pokeState.concat(pokeNames)
            )
        })
        .catch(err => {
            console.log(err)
        })
    }, [offsetState])
    return (
        <div>
            <input type="button" value="Fetch Pokemon" onClick={onClickHandler}/>
            <ul>
                {pokeState.map((pokeName, i) => 
                    <li key={i}>{pokeName}</li>
                )}
            </ul>
        </div>
    )
}
export default Pokemon