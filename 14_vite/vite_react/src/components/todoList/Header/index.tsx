import { Component } from 'react';
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid';
import './index.css';

export default class Header extends Component {
  
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  }

  handleKeyUp = (event) =>{
    const {keyCode, target} = event;
    var todoValue = target.value.trim();
    if(keyCode !== 13) return;
    if(todoValue === '') {
      alert('Task name should not be empty.');
      return;
    }
    console.log(todoValue, keyCode);
    const todoObj = {id: nanoid() , name: todoValue, done:false};
    this.props.addTodo(todoObj);
    target.value = '';
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="Plz key in your task name and confirm with enter" />
      </div>
    )
  }
}
