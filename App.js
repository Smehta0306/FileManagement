import React from 'react'
import SignUP from '../authentication/SignUp'
import {Container } from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//import Profile from '../authentication/Profile';
import Login from '../authentication/Login';
import PrivateRoute from '../authentication/PrivateRoute';
import ForgotPassword from '../authentication/ForgotPassword';
import UpdateProfile from '../authentication/UpdateProfile';
import Dashboard from './google-drive/Dashboard';
import Profile from '../authentication/Profile'

function App() {
  return (
    
    
  
    <Router>
    <AuthProvider>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/user" element={ <Profile /> }></Route>
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> 

      </Routes>
    </AuthProvider>
    </Router>
    
    
  
  
  
  );
}

export default App;
