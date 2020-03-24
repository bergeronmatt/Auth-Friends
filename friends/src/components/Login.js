import React from 'react'

import {AxiosWithAuth} from '../utils/AxiosWithAuth'

class Login extends React.Component {

    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials:{
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();

        // make a POST request with { username, password } to get the token back
        // endpoint will be "http://localhost:5000/api/login"
        // we will store the token in localstorage
        // if this call is successful we will navigate the user to the /protected route
        // TODO handle errors to show error state on the login form

        AxiosWithAuth()
        .post('/api/login', this.state.credentials)
        .then(res => {
            console.log(`login response : ${res}`)
            localStorage.setItem('token', JSON.stringify(res.data.payload));
            this.props.history.push('/protected');
        })
        .catch(err => {
            console.log(`login error: ${err}`);
        });
    }

        render() {
            return(
                <div>
                    <form onSubmit={this.login}>
                        <input 
                            type='text'
                            name='username'
                            placeholder='enter username'
                            value={this.state.credentials.username}
                            onChange={this.handleChange}
                        />
                        <input 
                            type='password'
                            name='password'
                            placeholder='enter password'
                            value={this.state.credentials.password}
                            onChange={this.handleChange}
                        />
                        <button>Log In</button>
                    </form>
                </div> 
            );
        }
    }


export default Login