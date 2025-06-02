import { Component } from 'react';
import PubSub from 'pubsub-js';
import axios from 'axios';

export default class Header extends Component {
    
    search = () => {
        const pubMsgName = 'schMsg';
        const {keywordElement:{value:keyword}} = this;
        PubSub.publish(pubMsgName, {isFirst:false, isLoading:true});
        axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
            response => {
                PubSub.publish(pubMsgName, {isLoading:false, users: response.data.items});
            },
            error => {
                PubSub.publish(pubMsgName, {isLoading:false, err: error.message});
            }
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Find GitHub User</h3>
                <div>
                    <input ref={c => this.keywordElement = c} type="text" placeholder="Input keywords" />&nbsp;
                    <button className='btn btn-danger' onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
