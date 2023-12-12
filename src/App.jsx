import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Login from "../src/components/Login"
import UserContext from './context/UserContext'

function App() {
    const [pseudo, setPseudo] = useState(null);

    const handleLoginSubmit = (userName) => {
      setPseudo(userName);
    };


  return (
        pseudo ?
            <UserContext.Provider value={{isLogged: true, paseudo: pseudo}}>
                <Home/>
            </UserContext.Provider>
            :
            <Login onLoginSubmit={handleLoginSubmit}/>
  );
}

export default App
