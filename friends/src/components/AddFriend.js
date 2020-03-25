import React from 'react'

import {AxiosWithAuth} from '../utils/AxiosWithAuth'

class AddFriend extends React.Component{
    constructor() {
        super();
        this.state = {
            friend: {
                name: '',
                age: 0,
                email: ''
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        AxiosWithAuth().post('/api/friends', this.state.friend, {
            headers:
                {Authorization: window.localStorage.getItem('token')}
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    handleChange = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type='text' name='name' placeholder='Name'/>
                    <input onChange={this.handleChange} type='text' name='age' placeholder='Age'/>
                    <input onChange={this.handleChange} type='text' name='email' placeholder='Email'/>
                    <button>Add Friend</button>
                </form>
            </div>
        )
    }
}

export default AddFriend;