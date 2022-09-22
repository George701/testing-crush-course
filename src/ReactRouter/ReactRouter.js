import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './navbar/Navbar'

import AppRouter from './router/AppRouter'


const ReactRouter = () => {
  return (
    <div>
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default ReactRouter