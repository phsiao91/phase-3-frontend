import { Route, Switch } from 'react-router-dom'
import Login from './Login';
import React, { useState, useEffect } from 'react';
import Portfolio from './Portfolio'
import Calendar from './Calendar';
import Reviews from './Reviews.js';






function App() {

  const [ loggedUser, setLoggedUser] = useState("")
  const [ destinations, setDestinations] = useState([])
  const [ itenerary, setItenerary ] = useState([])
  const [ myHistory, setMyHistory ] = useState( [] )

  const [ gallPics, setGallPics] = useState( [] )

  const getPlaces = () => {
    fetch("")
    .then(res => res.json())
    .then(fetchedPlaces => {console.log(fetchedPlaces)

      setDestinations(fetchedPlaces)

    })
  }
  useEffect(getPlaces, [])


  function handleUser(username) {
    console.log("In App,", username )
    setLoggedUser(`${username}`)
    
  
  }

  ///// Fetch Gallery pics 

  useEffect(() => {
    fetch("")
    .then(response => response.json())
    .then(fetchedImg => {
      console.log(fetchedImg)
      setGallPics(fetchedImg)


    })


  } , [] )

  // FETCH History 
  useEffect(() => {
    fetch("")
    .then(response => response.json())
    .then(fetchedHis => {
      console.log(fetchedHis)
      setMyHistory(fetchedHis)


    })


  } , [] )


  //POST to Portfolio

  function postImg(newImg){
    fetch('http://localhost:3000/gallery', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newImg)
    })
    .then (response => response.json())
    .then(oneImg => { console.log(oneImg)
    
     setGallPics([...gallPics, oneImg])
    })
    
  }



  console.log("LoggedUser,", loggedUser)
  console.log(destinations)
  

  const mapPlace = (place) => {
    console.log(place)

    let ifAdded = itenerary.find(eachPlace =>
      eachPlace.id === place.id)

      if(!ifAdded) {
        setItenerary([...itenerary, place])
      }
        else{
          console.log("Already Added!!")
        
      }
  }

  // function postHistory(newHis){
  //   fetch('http://localhost:3000/history', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(newHis)
  //   })
  //   .then (response => response.json())
  //   .then(oneHis => { console.log(oneHis)
    
  //    setHistory([ ...history, oneHis ])
  //   })
    
  // }


  return (
    <div>
     
    <Switch>
      <Route path="/calendar">
        <Calendar
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