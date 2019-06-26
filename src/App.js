import React, { Component } from 'react'
import SingleTodo from './SingleTodo'

export class App extends Component {

  constructor() {
    super();

    this.state = {
      todos: [],
      currentTodo: ""
    }
  }

  onChange = (element) => {
    this.setState({ currentTodo: element.target.value })
  }

  onClick = () => {
    let todoCopy = this.state.todos.slice();
    todoCopy.push(this.state.currentTodo);

    this.setState({ todos: todoCopy, currentTodo: "" })
  }

  delete = (i) => {
    let todoCopy = this.state.todos.slice();
    todoCopy.splice(i, 1);

    this.setState({ todos: todoCopy });
  }

  render() {
    let todoList = this.state.todos.map((element, index) => {
      return (
        <SingleTodo key={index} todo={element} remove={() => { this.delete(index) }} />
      )
    });
    return (
      <div>
        <input
          type="text"
          placeholder="Todo girin!"
          value={this.state.currentTodo}
          onChange={this.onChange} />
        <button onClick={this.onClick}>Ekle</button><br />
        {this.state.todos.length === 0 ? "Yapacak birşey yok!" : todoList}
      </div>
    )
  }
}

export default App
