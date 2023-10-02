import React from 'react'

const AuthRoute = ({children}) => {
    //get user from localstorage
    const user = JSON.parse(localStorage.getItem("userInfo"));
    const isLoggedIn = user?.token ? true:false

    if(isLoggedIn) return <h1>Access Denied</h1>;

    return 
    <>{children}</>
  
}

export default AuthRoute