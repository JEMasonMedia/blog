import { useState, useEffect } from 'react'
import RegisterForm from '../components/forms/RegisterForm'

import {
  registerUser,
  loginUser,
  useAuthState,
  useAuthDispatch,
} from '../context/authcontext'
import '../styles/login.module.css'

function Register({ history }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useAuthDispatch()
  const { isLogged, loading, errorMessage } = useAuthState()

  useEffect(() => {
    if (isLogged) history.push('/')
  }, [isLogged, history])

  const handleRegister = async (e) => {
    e.preventDefault()

    try {
      let response = await registerUser(dispatch, {
        username,
        password,
      })
      if (!response.user) return

      response = await loginUser(dispatch, {
        username,
        password,
      })

      if (!response.user) history.push('/login')

      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {!isLogged && (
        <RegisterForm
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          handleRegister={handleRegister}
          loading={loading}
          errorMessage={errorMessage}
        />
      )}
    </div>
  )
}

export default Register
