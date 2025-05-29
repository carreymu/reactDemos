import { Component } from 'react';
import './index.css';
import Header from './Header';
import List from './List';
import Footer from './Footer';

export default class TodoList extends Component {
  render() {
    return (
      <div>
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header />
                    <List/>
                    <Footer />
                </div>
            </div>
      </div>
    )
  }
}
