import React from 'react'
import { Navigate} from 'react-router-dom'

const ProtectedRoutes = ({children}) => {
  const allow = localStorage.getItem("loggedin");
  
    if(!allow){
      return <Navigate to={'/login'}/>;
    }
    return children;
}

export default ProtectedRoutes;