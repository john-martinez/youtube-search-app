import React, { Component } from 'react'
import '../searchbar.css'


class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos : [],
            todoInput : ''
        }
    }
    
    onChangeSearch(term){
        this.setState({todoInput: term});
        this.props.videoSearch(term);
    }
    render(){
        return (
            <div className="searchbar">
                <form autocomplete="off" onSubmit={e=>{
                    const todos = this.state.todos.slice();
                    todos.push(this.state.todoInput);
                    this.setState({todos: todos});
                }}>
                  <input id="search-bar-input" name="todoInput" 
                           value={this.state.todoInput}
                           onChange={e=>this.onChangeSearch(e.target.value)}
                        
                   /> 
                </form>
            </div>
        )
    }
}

export default SearchBar;