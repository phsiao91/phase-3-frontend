import React, { useState } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
// import styled from 'styled-components'



function Login(props) {

    const [username, setUsername] = useState(" ")
    console.log("useState Username is: ", username)


    function handleSubmit(e) {
        e.preventDefault()
        
        
    }


    return(
        <div className="login-page">
        <h1 class="center">breakFree </h1>
        
        <form className="Login" onSubmit={handleSubmit} >
            {/* onSubmit={handleSubmit} */}
            <h2>Log-in </h2>
            <label htmlFor="username"> Username </label>
            <input className="input-field" type="text" 
            id="username" 
            value={username}
            onChange ={ e => {
            setUsername(e.target.value) 
            //console.log("Username after Submit, " , username)
            }}/>
            <br></br>
            <label htmlFor="password"> Password </label>
            <input className="input-field" type="password" id="password" />
            <NavLink to="/portfolio">
            <br></br>
            <br></br>
            <div>
                <input type="submit" value="Enter" class="center"
                onClick={props.addUser(username)}/>
            </div>
            </NavLink>
        </form>
        
        </div>
    )
}

export default Login;