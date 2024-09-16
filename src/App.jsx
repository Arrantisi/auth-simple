import React from 'react'
import Auth from './pages/login/Auth'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/register/Register'
import Main from './pages/main/Main'

const App = () => {


  return (

    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App