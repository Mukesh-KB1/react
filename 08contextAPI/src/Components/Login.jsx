import React from 'react'
import UserContext from '../Context/UserContext';   
import { useContext } from 'react';

function Login() {

    const [userName,setUserName] = React.useState('');
    const [password,setPassword] = React.useState('');

    const {setUser} = useContext(UserContext);

    const btnClick = (e) => {
        e.preventDefault();
        setUser({userName,password})

        setUserName('');
        setPassword('');
    }
  return (
    <>
       <h2>Login User</h2>
       <input type="text" placeholder='UserName' value={userName} onChange={(e) => setUserName(e.target.value)}/>&nbsp;&nbsp;
       <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
         <button style={{margin : 10}} onClick={btnClick}>Login</button>
    </>
  )
}

export default Login