import React from 'react'

function LoginForm(props) {
  const {
    username,
    password,
    rememberme,
    setUsername,
    setPassword,
    setRememberMe,
    handleLogin,
    loading,
    errorMessage,
  } = props
  return (
    <div className='container'>
      <div className='d-flex justify-content-center h-100'>
        <div className='card'>
          <div className='card-header'>
            <h3>Login</h3>
            <div className='d-flex justify-content-end social_icon'>
              <span>
                <i className='fab fa-facebook-square'></i>
              </span>
              <span>
                <i className='fab fa-google-plus-square'></i>
              </span>
              <span>
                <i className='fab fa-twitter-square'></i>
              </span>
            </div>
          </div>
          {errorMessage ? (
            <div className='alert alert-dismissible alert-danger'>
              <button type='button' className='close' data-dismiss='alert'>
                &times;
              </button>
              {errorMessage}
            </div>
          ) : null}
          <div className='card-body'>
            <form>
              <div className='input-group form-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    <i className='fas fa-user'></i>
                  </span>
                </div>
                <input
                  type='text'
                  className='form-control'
                  placeholder='username'
                  id='username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={loading}
                />
              </div>
              <div className='input-group form-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    <i className='fas fa-key'></i>
                  </span>
                </div>
                <input
                  type='password'
                  className='form-control'
                  placeholder='password'
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                />
              </div>
              <div className='row align-items-center remember'>
                <input
                  type='checkbox'
                  id='rememberMe'
                  value={rememberme}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  disabled={loading}
                />
                Remember Me
              </div>
              <div className='form-group'>
                <input
                  type='submit'
                  value='Login'
                  className='btn float-right login_btn'
                  disabled={loading}
                  onClick={handleLogin}
                />
              </div>
            </form>
          </div>
          <div className='card-footer'>
            <div className='d-flex justify-content-center links'>
              <p>
                Don't have an account? <a href='/register'>Sign Up</a>
              </p>
            </div>
            <div className='d-flex justify-content-center'>
              <a href='/'>Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
