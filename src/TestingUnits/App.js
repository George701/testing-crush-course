/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react'

const getUser = () =>Promise.resolve({ id: 1, name: "Yataro"})

const Search = ({ value, onChange, children }) => (
  <div>
    <label htmlFor="search">{children}</label>
    <input
      placeholder="search text..."
      type="text"
      id="search"
      value={value}
      onChange={onChange}
      // required
    />
  </div>
)

const App = () => {
  const [search, setSearch] = useState("")
  const [user, setUser] = useState("")

  const loadUser = async () => {
    const user = await getUser()
    setUser(user)
  }

  useEffect(() => {
    loadUser()
  }, [])

  const handleChange = ({ target: { value } }) => {
    setSearch(value)
  }

  return (
    <div>
      {user && <h2>Logged in as {user.name}</h2>}
      <img src="" alt="search image" />
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>
      <p>Searches for {search ? search : "..."}</p>
    </div>
  )
}

export default App
