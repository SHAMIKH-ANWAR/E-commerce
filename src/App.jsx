import React from 'react'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/users/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      </Routes>
    </Router>
    
    
    
  )
}

export default App