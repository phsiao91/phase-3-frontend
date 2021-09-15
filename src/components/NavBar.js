import React from 'react';
import { NavLink} from 'react-router-dom'


function NavBar() {

    return(
        <header>
            <div className="header">
            <img src="https://affinancesolutions.com/wp-content/uploads/2020/04/A-F-trading-banner.jpg" />
            </div>
            <h1>Make your Money Count!!</h1>
            <nav class="center">
                <NavLink className="button" to="./portfolio">
                    Portfolio
                </NavLink>
                <NavLink className="button" to="./cal">
                    Calendar
                </NavLink>
                <NavLink className="button" to="./reviews">
                    Reviews
                </NavLink>
                <NavLink className="button" to="./">
                    Logout
                </NavLink>

            </nav>
            
            
        </header>

    )
}

export default NavBar;