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
        <>
        <h2 className="asset">{asset.name}-Bought at ${asset.price}</h2>
        <li className="card">
            {/* <button className="buttonImg" onClick={handleClick}>
            </button> */}
            <p></p>
        </li>
        </>
    )
}

export default PortfolioTab;