import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Account from './pages/Account';
import Home from './pages/Home';
import NewPost from './pages/NewPost';

const App = () => {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-post' element={<NewPost />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </Router>
  )
}

export default App