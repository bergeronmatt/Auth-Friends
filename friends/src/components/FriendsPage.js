import React from 'react'
import {AxiosWithAuth} from '../utils/AxiosWithAuth'

class FriendsPage extends React.Component{
    constructor(){
        super();
        this.state = { friends: []}
    }
    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        AxiosWithAuth().get("/api/friends")
        .then(response => {
            console.log(response);
            this.setState({ friends: response.data})
        })
        .catch(error => console.log(error))
    }

    render(){
        return(
            <div>
              
                Friends:
        {this.state.friends.map(friend => <div>{`${friend.name}, is ${friend.age} years old`}</div>)}
    
            </div>
        )
    }
}



export default FriendsPage;