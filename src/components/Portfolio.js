import React from 'react';
import PortfolioTab from './PortfolioTab';
import AssetCard from './AssetCard';
import NavBar from './NavBar';
import { useEffect, useState} from 'react'



function Portfolio (props) {
    console.log(props)


    const [ assets, setAssets ] = useState([])

    const getAssets = () => {
        fetch("http://localhost:9292/assets")
    .then(res => res.json())
    .then(fetchedAssets => {console.log(fetchedAssets)

      setAssets(fetchedAssets)

    })
    }
    useEffect(getAssets, [])


    // FETCH Crypto Assets

  const [ cryptoAssets, setCryptoAssets ] = useState( [] )



  const getMarketAssets = () => {

    const cryptoAssets = ["ethereum", "bitcoin", "aave", "bankless-dao"]
    const allTokensArray = [];
    
    cryptoAssets.forEach(asset => { 
      console.log(asset)

      // place ${tokenObj.name} into URL below in order to fetch portfolio assets
      fetch(`https://api.coingecko.com/api/v3/coins/${asset}`, {method: 'GET'})
      .then(response => response.json())
      .then(tokenObj => {
            console.log(tokenObj.name)
            const localObj = {
            "id": allTokensArray.length + 10,
            "name": tokenObj.name, 
            "price": tokenObj.market_data.current_price.usd,
            "quantity": 100,
            "in_portfolio": false
            // "symbol": tokenObj.symbol,
            // "market_cap": tokenObj.market_data.market_cap.usd,
            // "price_24h": tokenObj.market_data.price_change_percentage_24h,
            // "market_cap_rank": tokenObj.market_cap_rank,
            // "total_supply": tokenObj.market_data.total_supply,
            // "image": tokenObj.image.large
            }
            console.log(localObj)
            allTokensArray.push(localObj) 

          })                         
      })
      setCryptoAssets(allTokensArray) 
  }

  useEffect(getMarketAssets, [] )

  const addAssetHandler = (newAsset) => {
    console.log("I was clicked!!!")
    console.log(newAsset)
    const addFilter = assets.filter(object => object === newAsset) 
    if(addFilter.length < 1) {addAsset(newAsset)} 
  }

  const addAsset = (assetObj) => {
      console.log("PRE-POST: ",assetObj)
    // fetch(`${process.env.REACT_APP_API_URL}/assets`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json'
    //   },
    //   body: JSON.stringify(object)
    // })
    //   .then(res => res.json())
    //   .then(newAsset => {
    //     setAssets(assets.concat(newAsset))
    //     // history.push(`/assets/${newAsset.id}`)
    //   });
    const postObj = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json" },
            body: JSON.stringify({name: assetObj.name, price: assetObj.price, 
            quantity: assetObj.quantity, in_portfolio: assetObj.in_portfolio    
            })
        }
        
        fetch('http://localhost:9292/assets', postObj)
        .then(resp => resp.json())
        .then(tokenObj =>
            setAssets(assets.concat(tokenObj))
        )
  }

  ////////////////////////////////////////////////////
    
    const mapAssets = () => {
        let mappedAssets = assets.map(eachAsset =>{
            return(
                <PortfolioTab key={eachAsset.id}
                    asset={eachAsset}
                />
            )
        })
        return mappedAssets
    }

    const mapMarketAssets = () => {
        let mappedCryptoAssets = cryptoAssets.map(eachAsset =>{
            console.log(eachAsset.symbol)
            return(
                <AssetCard key={eachAsset.id}
                    asset={eachAsset} addAssetHandler={addAssetHandler}
                />
            )
        })
        return mappedCryptoAssets
    }




    return(
        <div id="page">
             <NavBar/>

             <div id="divMarket">
             <h2 className="welcome">The Market</h2>
             {mapMarketAssets()}
             </div>

             <div id="divPortfolio">
             <h2 className="welcome">{props.renderUser}'s Portfolio</h2>
             {mapAssets()}

             </div>
            
        </div>
    )
}

export default Portfolio;