import { Component } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import './index.css';

export default class List extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteById: PropTypes.func.isRequired,
  }

  render() {
    const { items, updateTodo, deleteById } = this.props;
    // console.log('his.props.show', this.props.show)
    return (
      <div>
        <ul className="todo-main">
          {
            items.map(todo => {
              return <Item key={todo.id} {...todo} updateTodo = {updateTodo} deleteById={deleteById} />
            })
          }
        </ul>
      </div>
    )
  }
}
