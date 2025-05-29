import { Component } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import './index.css';

export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    show: PropTypes.func.isRequired,
    deleteById: PropTypes.func.isRequired,
  }
  render() {
    const { todos } = this.props;
    console.log(this.props.show)
    return (
      <div>
        <ul className="todo-main">
          {
            todos.map((todo) => {
              return <Item key={todo.id} {...todo} createCheck={this.props.show} deleteById={this.props.deleteById} />
            })
          }
        </ul>
      </div>
    )
  }
}
