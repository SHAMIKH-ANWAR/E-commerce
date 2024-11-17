import React from 'react'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/users/Home';
import Register from './components/Auth/Register';
import { LoginForm } from './components/Auth/login-form';
import ExploreProducts from './components/users/ExploreProducts';
import Product from './components/users/Product';
import Cart from './components/users/Cart';
import AdminDashboard from './components/Admin';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<LoginForm/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Product' element={<ExploreProducts/>}/>
      <Route path='/ProductID' element={<Product/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/ADMIN-ID' element={<AdminDashboard/>}/>
      </Routes>
    </Router>
    
    
    
  )
}

export default App