import React, {useState} from 'react'


function AssetCard({ asset, buyAsset }) {


    const handleClick = (e) => {
        // e.preventdefault()
        // console.log(asset.name, asset.price)
        buyAsset(asset)
    }

    return(
        <div className="card">
            <h2 className="asset">{asset.name} ({asset.symbol}):: Current Price ${asset.price}</h2>
            <li className="card">
                
                <button className="buttonImg" onClick={handleClick}>Buy
                </button>
            
                <p></p>
            </li>
        </div>
    
    )
}

export default AssetCard;