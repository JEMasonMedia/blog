import { NavLink, Link } from 'react-router-dom'
import { useAuthState } from '../../context/authcontext'

const MenuBar = () => {
  const { isLogged } = useAuthState()

  return (
    <div className='menu-bar-container container-fluid p-0 m-0'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <a className='navbar-brand' href='/'>
          Blog React
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarColor01'
          aria-controls='navbarColor01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarColor01'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <NavLink
                to='/'
                exact
                strict
                activeClassName='active'
                className='nav-link'
              >
                Home
              </NavLink>
              {/* <span className='sr-only'>(current)</span> incorporation of accessibility features will come later*/}
            </li>
            <li className='nav-item'>
              <NavLink
                to='/features'
                activeClassName='active'
                className='nav-link'
              >
                Features
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/pricing'
                activeClassName='active'
                className='nav-link'
              >
                Pricing
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/about'
                activeClassName='active'
                className='nav-link'
              >
                About
              </NavLink>
            </li>
          </ul>
          <div>
            {isLogged ? (
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <NavLink
                    to='/profile'
                    activeClassName='active'
                    className='nav-link'
                  >
                    Profile
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <Link to='/logout' className='nav-link'>
                    Logout
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <NavLink
                    to='/login'
                    activeClassName='active'
                    className='nav-link'
                  >
                    Login
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    to='/register'
                    activeClassName='active'
                    className='nav-link'
                  >
                    Register
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default MenuBar
