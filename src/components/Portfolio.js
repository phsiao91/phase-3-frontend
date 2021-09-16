import React from 'react';
import PortfolioTab from './PortfolioTab';
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




    return(
        <div>
             <NavBar/>
             <h2 className="welcome">Start Investing {props.renderUser}!!!</h2>
             {mapAssets()}
            
        </div>
    )
}

export default Portfolio;