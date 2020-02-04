import React, { Component } from 'react'

export default class FilteredNav extends Component {
    constructor(props){
        super(props);
        this.userSearch = React.createRef(); 
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(){
        this.props.onChange(this.userSearch.current.value)
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/" style={{"color":"#c7f0db"}}>Schwifty</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 my-lg-0">
                        <input ref={this.userSearch} onChange={this.handleChange} className="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search"/>
                    </form>
                </div>
            </nav>
        )
    }
}
