
import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import {UserContext} from '../context/context'
function PrivateRoute({component:Component , ...rest}) {
    const context = useContext(UserContext)
    return (
       <Route {...rest} render={props=>context.isAuth===null && context.load ? (<Redirect to="/login"/>):(
           <Component {...props} />
       )}/>
    )
}

export default PrivateRoute
