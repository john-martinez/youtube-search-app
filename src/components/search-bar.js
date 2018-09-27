import React, { Component } from 'react'

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos : [],
            todoInput : ''
        }
    }
    render(){
        return (
            <form onSubmit={e=>{
                const todos = this.state.todos.slice();
                todos.push(this.state.todoInput);
                this.setState({todos: todos});
            }}>
                <input name="todoInput" 
                       value={this.state.todoInput}
                       onChange={e=>(this.setState({todoInput: e.target.value}))}
                />
            </form>
        )
    }
}

export default SearchBar;