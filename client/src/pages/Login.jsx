import { useState, useEffect } from 'react'
import LoginForm from '../components/forms/LoginForm'

import {
  loginUser,
  useAuthState,
  useAuthDispatch,
} from '../context/authcontext'
import '../styles/login.module.css'

function Login({ history }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rememberme, setRememberMe] = useState(false)

  const dispatch = useAuthDispatch()
  const { isLogged, loading, errorMessage } = useAuthState()

  useEffect(() => {
    if (isLogged) history.push('/')
  }, [isLogged, history])

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      let response = await loginUser(dispatch, {
        username,
        password,
        rememberme,
      })
      if (!response.user) return
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {!isLogged && (
        <LoginForm
          username={username}
          password={password}
          rememberme={rememberme}
          setUsername={setUsername}
          setPassword={setPassword}
          setRememberMe={setRememberMe}
          handleLogin={handleLogin}
          loading={loading}
          errorMessage={errorMessage}
        />
      )}
    </div>
  )
}

export default Login
