import React, { Component } from 'react'
import CharacterList from '../components/characterList/CharacterList'
import FilterNav from '../components/navbar/FilteredNav'

export default class Main extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state ={
            userSearch: ''
        }
    }

   


    handleChange(props){
        this.setState({userSearch: props })
    }

render() {
        return (
            <React.Fragment>
                <FilterNav onChange={this.handleChange}> </FilterNav>
                <CharacterList userSearch = {this.state.userSearch}></CharacterList>
            </React.Fragment>
        )
    }
}
