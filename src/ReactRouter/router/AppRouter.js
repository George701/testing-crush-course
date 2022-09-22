import React from 'react'
import { Routes, Route } from 'react-router-dom'

import About from '../Pages/About'
import Main from '../Pages/Main'
import Error from '../Pages/Error'
import UserDetailed from '../Pages/UserDetailed'
import Users from '../Pages/Users'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/users' element={<Users/>} />
      <Route path='/user/:id' element={<UserDetailed/>} />
      <Route path='/*' element={<Error/>} />
    </Routes>
  )
}

export default AppRouter