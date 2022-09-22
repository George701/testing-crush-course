import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([])

  const LoadUsers = async () => {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
    setUsers(resp.data)
  }

  useEffect(() => {
    LoadUsers()
  }, [])

  return (
    <div data-testid="users-page">
      {users.map(user => (
        <Link
          to={`/user/${user.id}`}
          key={user.id}
          data-testid='user-item'
        >
          {user.name}
        </Link>
      ))}
    </div>


  )
}

export default Users