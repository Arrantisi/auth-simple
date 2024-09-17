import React from 'react'
import Login from './pages/login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/register/Register'
import Main from './pages/main/Main'
import Dashboard from './pages/dashboard/Dashboard'

const App = () => {


  return (

    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App