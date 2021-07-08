import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuthState } from '../../context/authcontext'

const AppRoutes = ({ component: Component, path, isPrivate, ...rest }) => {
  const { isLogged } = useAuthState()
  return (
    <Route
      path={path}
      render={(props) =>
        isPrivate && !isLogged ? (
          <Redirect to={{ pathname: '/login' }} />
        ) : (
          <Component {...props} />
        )
      }
      {...rest}
    />
  )
}

export default AppRoutes
