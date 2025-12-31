
import './App.css'
import UserContextProvider from './Context/UserContextProvider.jsx';
import Profile from './Components/Profile.jsx';
import Login from './Components/Login.jsx';

function App({title}) {

  return (
    <UserContextProvider>
      <h2>Context API Example</h2>
      <Login />
      
      <Profile />
    </UserContextProvider>
  )
}

export default App