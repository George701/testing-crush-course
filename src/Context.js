import React, { useState, useContext, createContext } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, toggleLoginStatus] = useState(false)

  const toggleLogin = () => {
    toggleLoginStatus(!isLoggedIn)
  }

  return (
    <AuthContext.Provider value={{ toggleLogin, isLoggedIn}}>
      <div>Message: {children}</div>
    </AuthContext.Provider>
  )
}

export const ConsumerComponent = () => {
  const { isLoggedIn, toggleLogin } = useContext(AuthContext);

  return (
    <>
      <input type='button' value='Login' onClick={toggleLogin} />
      {isLoggedIn ? "Welcome!" : "Please, log in"}
    </>
  )
}