import axios from 'axios'

export async function registerUser(dispatch, loginPayload) {
  try {
    dispatch({ type: 'REQUEST_REGISTER' })
    let response = await axios.post('/userauth/register', loginPayload, {
      'Content-Type': 'application/json',
    })

    let data = await response.data

    if (data.msg !== 'User Created') {
      dispatch({ type: 'REGISTER_ERROR', error: data.msg })
      return
    }

    if (data.user) {
      dispatch({ type: 'REGISTER_SUCCESS', payload: data.user })
      return data
    }
  } catch (error) {
    dispatch({
      type: 'REGISTER_ERROR',
      error: `${error.response.data.msg}. Please try again.`,
    })
  }
}

export async function loginUser(dispatch, loginPayload) {
  try {
    dispatch({ type: 'REQUEST_LOGIN' })
    let response = await axios.post('/userauth/login', loginPayload, {
      'Content-Type': 'application/json',
    })

    let data = await response.data

    if (data.msg) {
      dispatch({ type: 'LOGIN_ERROR', error: data.msg })
      return
    }

    if (data.user) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: data })
      localStorage.setItem('currentUser', JSON.stringify(data))
      return data
    }
  } catch (error) {
    dispatch({
      type: 'LOGIN_ERROR',
      error: `${error.response.data.msg}. Please try again.`,
    })
  }
}

export async function logout(dispatch) {
  try {
    dispatch({ type: 'LOGOUT' })
    await axios.post('/userauth/logout', {
      'Content-Type': 'application/json',
    })
    localStorage.removeItem('currentUser')
  } catch (error) {
    dispatch({ type: 'LOGOUT_ERROR', error })
    console.log(error)
  }
}
