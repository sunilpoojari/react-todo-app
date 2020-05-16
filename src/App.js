import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './addTodo'

class App extends Component {

  state = {
    Todos: [
      {id: 1 , item:"Buy Milk"},
      {id: 2 , item:"Buy Eggs"}
    ]
  }
  deleteTodo = (id) => {
    console.log(id);
    const todos = this.state.Todos.filter(todo =>{
      return todo.id !== id
    });
    this.setState({
      Todos : todos
    })
  }
  addTodo = (todo) => {
    console.log(todo)
    todo.id = Math.random();
    let todos = [...this.state.Todos,todo]
    this.setState({
      Todos : todos
    })
  }
  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
       <Todos Todos = {this.state.Todos} deleteTodo = {this.deleteTodo}/>
       <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
