import React from 'react';
import PortfolioTab from './PortfolioTab';
import NavBar from './NavBar';



function Portfolio (props) {
    console.log(props)
    





    return(
        <div>
             <NavBar/>
             <h2 className="welcome">Start Investing {props.renderUser}!!!</h2>
            
        </div>
    )
}

export default Portfolio;