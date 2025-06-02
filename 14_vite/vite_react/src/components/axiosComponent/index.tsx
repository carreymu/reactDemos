import axios from 'axios';
import { Component } from 'react';

export default class AxiosXHR extends Component {
    getPersonData = () => {
        axios.get('http://localhost:5000/api1/persons').then(
            response => {console.log('success', response.data);},
            error => {console.log('error', error);}
        )
    }
    getCarData = () => {
        axios.get('http://localhost:5001/api2/cars').then(
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
