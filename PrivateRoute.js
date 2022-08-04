import React from "react"
import {  Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"


 const PrivateRoute = ({children})  => {
  const {currentUser} = useAuth()
  //currentUser = true 
if(currentUser) {
  return children
}
else{
  return <Navigate to="/login" />
}
}

export default PrivateRoute