import React from 'react';
import {Link} from 'react-router-dom'



class CharacterList extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            characters: [],
            filteredArray: []
        };
    }
    
    

    componentDidMount() {
        fetch('https://rickandmortyapi.com/api/character/').then(resp => resp.json()).then(resp => {
            const chars = [...resp.results]
            this.setState({
                characters: chars,
                filteredArray: chars
            });
        }).catch(err => console.error(err))
    }

    componentDidUpdate(prevProps){
        if(prevProps.userSearch !== this.props.userSearch){
            const filteredArray = this.state.characters.filter(character => character.name.toLowerCase().includes(this.props.userSearch.toLowerCase()))
            this.setState({
                filteredArray:filteredArray
            })
        } 
    }

    componentWillUnmount(){
        this.abortController.abort();
    }

    render() {
        
        const characters = this.state.filteredArray.map(character =>{
           return (
                <div className= "col-md-4 w-100" key={character.name} style={{"paddingTop":"10px"}}>
                    <Link to = {`/${character.id}`} style={{"textDecoration": "none"}}>
                            <div className="card h-100" style={{}}>
                                <button style={{"width":"100%","height":"100%","border":"none","backgroundColor":"#6c7b95"}}>
                                    <img className="card-img-top" id="imageBox"src={character.image} alt=""/>
                                    <div className="card-body">
                                        <h5 className="card-title">{character.name}</h5>
                                        <p className="card-text">Location: {character.location.name}</p>
                                    </div>
                                </button>
                            </div>
                    </Link>
                </div>
            
           )
        });
        
        return (
        <div className="CharacterList"> 
            <h1>Rick and Morty contact list</h1>
            <div className="row" >
                {characters}    
            </div>
        </div>             
        )
    }

}

export default CharacterList; 
