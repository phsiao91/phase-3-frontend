import React, {useState} from 'react'


function AssetCard({ asset, addAssetHandler }) {

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


    console.log("assetCard:", asset)

    const buttonStyle = {
        color: 'white',
        fontSize: 10,
        height: 30,
        width: 60,
        borderRadius: 1
      };

    return(
        <div className="card" style={{display: 'inline-block'}}>
            <h2 className="asset">{asset.name} ({asset.symbol}):: Bought at ${asset.price}</h2>
            <li className="card">
                {/* <button className="buttonImg" onClick={handleClick}>
                </button> */}
                <p></p>
            </li>
            <button className="cardButton" onClick={()=>addAssetHandler(asset)} style={buttonStyle} >Add to Backend</button>
        </div>
    )
}

export default AssetCard;