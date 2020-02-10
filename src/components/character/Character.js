import React, {useState, useEffect} from 'react'; 
import {Link} from 'react-router-dom'
import style from './Character.modules.css'
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
        <div className='container' style={{"marginBottom": "100px"}}>
            <h1>{character.name}</h1>
            <div className="card" style={style.card}>
            <img src={character.image} className="card-img-top" alt={character.image}/>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Gender: {character.gender}</li>
                <li className="list-group-item">Status: {character.status}</li>
                <li className="list-group-item">Species:{character.species}</li>
                <li className="list-group-item">Origin:{character.origin.name}</li>
                <li className="list-group-item">Location:{character.location.name}</li>
                <li className="list-group-item"><Link to="/"><button className="btn btn-lg btn-dark" >Return</button></Link></li>
            </ul>
        </div>
    </div>    
    )
}

export default Character; 