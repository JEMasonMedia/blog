import React from 'react'

function RegisterForm(props) {
  const {
    username,
    password,
    setUsername,
    setPassword,
    handleRegister,
    loading,
    errorMessage,
  } = props
  return (
    <div className='container'>
      <div className='d-flex justify-content-center h-100'>
        <div className='card'>
          <div className='card-header'>
            <h3>Register</h3>
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
              <div className='form-group'>
                <input
                  type='submit'
                  value='Register'
                  className='btn float-right login_btn'
                  disabled={loading}
                  onClick={handleRegister}
                />
              </div>
            </form>
          </div>
          <div className='card-footer'>
            <div className='d-flex justify-content-center links'>
              <p>
                Already have an account? <a href='/login'>Login</a>
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

export default RegisterForm
