import React, {useState, useEffect} from 'react'; 

function Character({match}){
    
    useEffect(() =>{
        fetchCharacters(); 
    })
    const [character, setCharacter ] = useState({
        origin:{},
        location: {}
    })
    
    const fetchCharacters = async () =>{
        
        const fetchedCharacter = await fetch(`https://rickandmortyapi.com/api/character/${match.params.id}`);

        const character = await fetchedCharacter.json();
        setCharacter(character)
        
    }

    return(
        <div>
            <h1>{character.name}</h1>
            <img src={character.image} alt=""/>
            <p>Gender: {character.gender}</p>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Origin: {character.origin.name}</p>
            <p>Location: {character.location.name}</p>
        </div>    
    )
}

export default Character; 