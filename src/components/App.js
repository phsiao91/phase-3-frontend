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

  // FETCH Crypto Assets

  const [ cryptoAssets, setCryptoAssets ] = useState( [] )

  useEffect(() => {

    const cryptoAssets = ["ethereum", "bitcoin", "aave", "bankless-dao", "synthetix-network-token"]


    allTokensArray = [];

    cryptoAssets.forEach(asset => { 
      console.log(asset)
    
      // place ${tokenObj.name} into URL below in order to fetch portfolio assets
      fetch(`https://api.coingecko.com/api/v3/coins/${assets}`, {method: 'GET'})
      .then(response => response.json())
      .then(tokenArray => {
        tokenArray.forEach(tokenObj =>{

            allTokensArray.push(tokenObj) 

          })                    


      })
    }
    setCryptoAssets(allTokensArray);

            // // Set initial wallet cards:
            // fetch('http://localhost:3000/NFTs')
            // .then(resp => resp.json())
            // .then(walletArray => {
            //     setWalletNFTs(walletArray)
            // })

  } , [] )

  // const price = tokenArray.market_data.current_price.usd
  // tokenPrice.innerHTML = `<u>Current Price:</u> <span class"=bold">$${price.toLocaleString('en-US')}</span>`;

  // const priceChange24h = tokenArray.market_data.price_change_percentage_24h
  // if (priceChange24h > 0) {
  //   tokenPriceChange24h.innerHTML = `<u>Price Change 24h:</u> <span class="fontGreen">%${priceChange24h}</span>`;
  // } else { tokenPriceChange24h.innerHTML = `<u>Price Change 24h:</u> <span class="fontRed">%${priceChange24h}</span>`;
  // }

  // const marketCap = tokenArray.market_data.market_cap.usd
  // tokenMarketCap.innerHTML = `<u>Market Cap:</u> $${marketCap.toLocaleString('en-US')}`;

  // const marketCapRank = tokenArray.market_cap_rank
  // tokenMarketCapRank.innerHTML = `<u>Market Cap Rank:</u> ${marketCapRank}`;

  // const totalSupply = tokenArray.market_data.total_supply
  // tokenCirculatingSupply.innerHTML = `<u>Circulating Supply:</u> ${circulatingSupply.toLocaleString('en-US')}`;

  // const descriptionCG = tokenArray.description.en;
  // tokenDescription.innerHTML = `<u>Description:</u> ${descriptionCG}`;

  // const imgLarge = tokenArray.image.large







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