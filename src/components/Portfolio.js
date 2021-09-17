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
                    addAsset={addAsset}
                />
            )
        })
        return mappedAssets
    }

    const mapPortfolioAssets = () => {
        let portfolioAssets = assets.map(eachAsset =>{
            if(eachAsset.in_portfolio === true) {
            return(
                <PortfolioTab key={eachAsset.id}
                    asset={eachAsset}
                    removeAsset={removeAsset}
                />
            )}
        })
        return portfolioAssets
    }

    const addAsset = (asset) => {
        asset.in_portfolio = true
        updateAsset(asset)
    }
  
    const removeAsset = (asset) => {
        asset.in_portfolio = false
        updateAsset(asset)
    }      

    const updateAsset = (updatedAsset) => {
        console.log(updatedAsset.name)
    // newAsset.preventDefault()
    let assetToUpdate = {
        name: updatedAsset.name,
        price: updatedAsset.price,
        quantity: updatedAsset.quantity,
        in_portfolio: updatedAsset.in_portfolio
    }

    fetch(`http://localhost:9292/assets/${updatedAsset.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(assetToUpdate)
    })
    .then (response => response.json())
    .then(patchedAsset => { 
        setAssets(assets.map((asset) => (asset.id === parseInt(patchedAsset.id) ? patchedAsset : asset))) 
        })
    }

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