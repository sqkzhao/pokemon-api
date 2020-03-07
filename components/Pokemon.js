import React, {useState, useEffect} from 'react'

const Pokemon = () => {
    const [pokeState, setPokeState] = useState([])
    const onClickHandler = (e) => {
        fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=840")
        .then(response => {
            return response.json()
        })
        .then(response => {
            // console.log(response)
            let pokeNames = response.results.map((item) => {
                return item.name
            })
            setPokeState(pokeNames)
        })
        .catch(err => {
            console.log(err)
        })
    }
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