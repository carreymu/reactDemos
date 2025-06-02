import { Component } from 'react';
import Header from './header';
import List from './list';
import './index.css';

export default class PubSubDemo extends Component {
  render() {
    return (
      <div className='container'>
        <Header/>
        <List/>
      </div>
    )
  }
}
