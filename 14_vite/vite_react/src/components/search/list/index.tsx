import { Component } from 'react';
import PubSub from 'pubsub-js';
import './index.css';

export default class List extends Component {
    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        err: ''
    }

    componentDidMount(): void {
        this.token = PubSub.subscribe('schMsg', (_, stateObj) => {
            console.log('list data', stateObj);
            this.setState(stateObj);
        });
    }

    componentWillUnmount(): void {
        PubSub.unsubscribe(this.token);
    }

    render() {
        const { users, isFirst, isLoading, err } = this.state;
        return (
            <div className="row">
                {
                    isFirst ? <h2>Key in keywords and go</h2> :
                        isLoading ? <h2>Loading ...</h2> :
                            err ? <h2 style={{ color: 'red' }}>{err}</h2> :
                                users.map(userObj => {
                                    return (
                                        <div key={userObj.id} className='card'>
                                            <a rel="noreferrer" href={userObj.html_url} target='_blank'>
                                                <img alt="head_portrait" src={userObj.avatar_url} style={{ width: '100px' }} />
                                            </a>
                                            <p className='card-text'>{userObj.login}</p>
                                        </div>
                                    )
                                })
                }
            </div>
        )
    }
}
