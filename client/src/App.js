import { Router, Switch } from 'react-router-dom'
import history from './history'

import MenuBar from './components/menus/MenuBar'
import Footer from './components/footer/Footer'

import routes from './Config/routes.js'
import { AuthProvider } from './context/authcontext/'
import AppRoutes from './components/approutes'

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <MenuBar />
        <Switch>
          {routes.map((route) => (
            <AppRoutes
              exact
              strict
              key={route.path}
              path={route.path}
              component={route.component}
              isPrivate={route.isPrivate}
            />
          ))}
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  )
}

export default App

// <Router history={history}>
//   <UserProvider>
//     <MenuBar />
//     {/* <Route path="/profile" component={Profile} /> */}
//     <Switch>
//       <Route path='/' exact strict component={Home} />
//       <Route path='/login' exact strict component={Login} />
//       <Route path='/register' exact strict component={Register} />
//       <Route path='/features' exact strict component={Features} />
//       <Route path='/pricing' exact strict component={Pricing} />
//       <Route path='/about' exact strict component={About} />
//       <Route component={notFound404} />
//     </Switch>
//     <Footer />
//   </UserProvider>
// </Router>

// import UserProvider from './context/UserProvider'

// import Home from './pages/Home'
// import Login from './pages/Login'
// import Register from './pages/Register'
// import Features from './pages/Features'
// import Pricing from './pages/Pricing'
// import About from './pages/About'
// import notFound404 from './pages/notFound404'

// const [temp, setTemp] = useState(null)

// axios.defaults.baseURL = 'http://localhost:4000'
// axios.defaults.headers.post['Content-Type'] = 'application/json'

// useEffect(() => {
// axios
//   .post('/userauth/logout', {
//     username: 'name',
//     password: 'password',
//   })
//   .then((res) => {
//     // const { _id, username } = res.data.user
//     console.log(res.data)
//     // setTemp([_id, username])
//   })
//   .catch((err) => {
//     console.log(err)
//   })

//   return () => {}
// }, [])
