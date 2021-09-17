import React from 'react';
import PortfolioTab from './PortfolioTab';
import NavBar from './NavBar';
import { useEffect, useState} from 'react'
import AssetCard from './AssetCard';



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
    
    const mapMarketAssets = () => {
        let mappedAssets = assets.map(eachAsset =>{
            return(
                <PortfolioTab key={eachAsset.id}
                    asset={eachAsset}
                />
            )
        })
        return mappedAssets
    }

    const mapPortfolioAssets = () => {
        let mappedAssets = assets.map(eachAsset =>{
            if(eachAsset.in_portfolio === true) {
            return(
                <PortfolioTab key={eachAsset.id}
                    asset={eachAsset}
                />
            )}
        })
        return mappedAssets
    }

    // const [ cryptoAssets, setCryptoAssets ] = useState( [] )


//   const getMarketAssets = () => {

//     const cryptoAssets = ["ethereum", "bitcoin", "aave", "bankless-dao"]
//     const allTokensArray = [];
    
//     cryptoAssets.forEach(asset => { 
//       console.log(asset)

//       // place ${tokenObj.name} into URL below in order to fetch portfolio assets
//       fetch(`https://api.coingecko.com/api/v3/coins/${asset}`, {method: 'GET'})
//       .then(response => response.json())
//       .then(tokenObj => {
//             console.log(tokenObj.name)
//             const localObj = {
//             "id": tokenObj.id,
//             "name": tokenObj.name, 
//             "symbol": tokenObj.symbol,
//             "price": tokenObj.market_data.current_price.usd,
//             "market_cap": tokenObj.market_data.market_cap.usd,
//             "price_24h": tokenObj.market_data.price_change_percentage_24h,
//             "market_cap_rank": tokenObj.market_cap_rank,
//             "total_supply": tokenObj.market_data.total_supply,
//             "image": tokenObj.image.large
//             }
            
//             allTokensArray.push(localObj) 

//           })                         
//       })
//       setCryptoAssets(allTokensArray) 
//   }

//   useEffect(getMarketAssets, [] )


//   const mapMarketAssets = () => {
//     let mappedCryptoAssets = cryptoAssets.map(eachAsset =>{
//         console.log(eachAsset.symbol)
//         return(
//             <AssetCard key={eachAsset.id}
//                 asset={eachAsset}
//                 buyAsset={postAsset}
//             />
//         )
//     })
//     return mappedCryptoAssets
// }

// const addNewCritterFrontendAndBackendProcess =(synthEvent)=>{
//     console.log("In addNewCritterFrontendAndBackendProcess")  //
//     synthEvent.preventDefault()
// }


// function postAsset(newAsset){
//     console.log(newAsset)
    const postAsset = (newAsset) => {
        console.log(newAsset.name)
    // newAsset.preventDefault()
    let assetToPost ={
        name: newAsset.name,
        price: newAsset.price,
        quantity: 100,
        in_portfolio: true
    }

    fetch('http://localhost:9292/assets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(assetToPost)
    })
    .then (response => response.json())
    .then(oneAsset => { console.log(oneAsset)
    
     setAssets([...assets, oneAsset])
    })
    
  }


    return(
        <div>
             <NavBar/>

             <div id="divMarket">
             <h2 className="welcome">The Market</h2>
             {mapMarketAssets()}
             </div>

             <h2 className="welcome">Start Investing {props.renderUser}!!!</h2>
             {mapPortfolioAssets()}
            
        </div>
    )
}

export default Portfolio;