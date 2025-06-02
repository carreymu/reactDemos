import axios from 'axios';
import { Component } from 'react';

export default class AxiosXHR extends Component {
    getPersonData = () => {
        axios.get('https://i0.hdslb.com/bfs/svg-next/BDC/uploader_name_square_line/v1.json').then(
            response => {console.log('success', response.data);},
            error => {console.log('error', error);}
        )
    }
    getCarData = () => {
        axios.get('https://i0.hdslb.com/bfs/svg-next/BDC/more_vertical_fill/v1.json').then(
            response => {console.log('success', response.data);},
            error => {console.log('error', error);}
        )
    }
  render() {
    return (
      <div>
        <button className='btn btn-danger' onClick={this.getPersonData}> Fetch data from a person</button> &nbsp;
        <button className='btn btn-danger' onClick={this.getCarData}>Fetch data from a car</button>
      </div>
    )
  }
}
