import React, {useState} from 'react'


function PortfolioTab({ asset, addAsset, removeAsset }) {

    // const [ history, setHistory ] = useState( [] )


    // const handleClick = () => {
    //     console.log(place.name)
    //     selectPlace(place)
    //     postHistory(place)
    // }

    

    // function postHistory(newHis){
    //     fetch('', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(newHis)
    //     })
    //     .then (response => response.json())
    //     .then(oneHis => { console.log(oneHis)
        
    //      setHistory([ ...history, oneHis ])
    //     })
        
    //   }
    



    return(
        <div className="assetContainer">
            <div className="innerAssetDiv">

            <div className="leftDiv">
                {addAsset ? <h2 className="asset">{asset.name} - Price: ${asset.price}</h2>
                : <h2 className="asset">{asset.name} - Quantity: {asset.quantity} - Price: ${asset.price}</h2>}
            </div>

            <div className="rightDiv" >
                <button className="addButton" onClick={addAsset ? ()=>addAsset(asset) 
                 : ()=>removeAsset(asset)}>
                { (addAsset) ? "BUY" : "SELL"}
                </button>
            </div>   

            </div>
        </div>
    )
}

export default PortfolioTab;