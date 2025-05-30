import { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class Footer extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,

  }
  //Select all and no one
  handleCheckAll = (event) => {
    this.props.chooseAll(event.target.checked)
  }

  handleClearAllDone = () => {
    this.props.clearAllDone();
  }
  render() {
    const { todos } = this.props;
    const doneCnt = todos.reduce((pre, todo) =>  pre + (todo.done ? 1 : 0) , 0);
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          {/*DO NOT USE defaultChecked HERE*/}
          <input onChange={this.handleCheckAll} type="checkbox" checked={doneCnt === total && total !== 0 ? true : false} />
        </label>
        <span>
          <span>Done {doneCnt}</span> / Total {total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">Clear checked tasks</button>
      </div>
    )
  }
}
