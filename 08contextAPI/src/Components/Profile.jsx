import React from 'react'
import UserContext from '../Context/UserContext'
import { useContext } from 'react';

function Profile() {
    const {user} = useContext(UserContext);
  
    if(!user || !user.userName || !user.password)return <h2>Please Login to view Profile</h2>;

    return(
        <h3>Hey I am {user.userName}</h3>
    )
}

export default Profile