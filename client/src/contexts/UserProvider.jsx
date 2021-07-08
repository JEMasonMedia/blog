import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
const context = createContext(null)

const UserProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    if (isLogged) {
      axios
        .get('/userauth/self')
        .then((res) => {
          if (res.data.msg) {
            console.log(res.data.msg)
            setUser({})
          } else setUser(res.data.user)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [isLogged])

  return <context.Provider value={user}>{children}</context.Provider>
}

UserProvider.context = context

export default UserProvider
