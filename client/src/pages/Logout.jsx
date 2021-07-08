import { useEffect } from 'react'

import { logout, useAuthDispatch } from '../context/authcontext'

function Logout({ history }) {
  const dispatch = useAuthDispatch()

  useEffect(() => {
    async function fetchData() {
      try {
        await logout(dispatch)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()

    return history.push('/')
  }, [dispatch, history])

  return <></>
}

export default Logout
