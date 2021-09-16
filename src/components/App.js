import { Route, Switch } from 'react-router-dom'
import Login from './Login';
import React, { useState, useEffect } from 'react';
import Portfolio from './Portfolio'
import Cal from './Cal';
import Reviews from './Reviews.js';






function App() {

  const [ loggedUser, setLoggedUser] = useState("")

  
  


  function handleUser(username) {
    console.log("In App,", username )
    setLoggedUser(`${username}`)
    
  
  }

  ///// Fetch Gallery pics 


  


  //POST to Portfolio



  console.log("LoggedUser,", loggedUser)

  

  



  return (
    <div>
     
    <Switch>
      <Route path="/cal">
        <Cal
        />
      </Route>
      <Route path="/portfolio">
        <Portfolio
        renderUser={loggedUser}
          />
      </Route>
      <Route path="/reviews">
        <Reviews
        />
      </Route>
      <Route path="/">
        <Login 
        addUser={handleUser}
        />
      </Route>
    </Switch>
    </div>
  );
}

export default App;