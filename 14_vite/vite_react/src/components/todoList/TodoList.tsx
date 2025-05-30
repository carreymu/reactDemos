import { Component } from 'react';
import Header from './Header';
import List from './List';
import Footer from './Footer';
import './index.css';

export default class TodoList extends Component {
  state = {
    todos: [
      { id: "001", "name": 'eat', done: true },
      { id: "002", "name": 'sleep', done: true },
      { id: "003", "name": 'code', done: false },
    ]
  }

  // add a todo Object and set it as the first item
  addTodo = (todoObj) => {
    console.log('App', todoObj);
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos];
    this.setState({ todos: newTodos });
  }

  // modify state of chosen or not by id
  updateTodo = (id, checked) => {
    const { todos } = this.state;
    const newTodo = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, done: checked };
      }
      return todo;
    });
    this.setState({ todos: newTodo })
  }

  deleteById = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter(todo => todo.id !== id);
    this.setState({ todos: newTodos });
  }

  chooseAll = (done) => {
    const { todos } = this.state;
    const newTo = todos.map((todo) => {
      return { ...todo, done }
    });
    this.setState({ todos: [...newTo] });
  }

  clearAllDone = () => {
    const { todos } = this.state;
    const newTodos = todos.filter(todo => {
      return !todo.done;
    });
    this.setState({ todos: newTodos });
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo} />
            <List items={todos} updateTodo={this.updateTodo} deleteById={this.deleteById} />
            <Footer todos={todos} chooseAll={this.chooseAll} clearAllDone={this.clearAllDone} />
          </div>
        </div>
      </div>
    )
  }
}
