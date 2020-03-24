import React, {useState, useEffect} from 'react'
//import moment from 'moment'
import { useParams } from 'react-router-dom';
import {AxiosWithAuth} from '../utils/AxiosWithAuth'


const FriendsPage = () => {

    const [friend, setFriend] = useState();

    useEffect(() => {

        AxiosWithAuth().get(`/api/friends/`)
        .then(res => {
            console.log(res);
            setFriend(res.data.data)
        })
        .catch(err => {
            console.log(`FriendsPage .get error: ${err}`)
        })
    })


    return(
        <div>                
            <div>
                <h2>Name: {friend.name}</h2>
                <p>Age</p>
                <p>Email</p> 
            </div>
           
        </div>
    )

}


export default FriendsPage;