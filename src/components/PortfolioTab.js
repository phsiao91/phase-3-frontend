import React, {useState} from 'react'


function PortfolioTab({ asset }) {

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
        <div className="assetContainer" style={{display: 'inline-block' }}>
            <div className="assetNameDiv">
                <h2 className="asset">{asset.name} | Quantity: {asset.quantity} | Price: ${asset.price}</h2>
            </div>

            <div className="assetButtonDiv">
                {/* <button className="assetButton" onClick={handleClick}>
                </button> */}
            </div>   

        </div>
    )
}

export default PortfolioTab;