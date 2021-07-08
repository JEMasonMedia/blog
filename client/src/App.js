// import { useEffect, useState } from 'react'
import { Router, Route } from 'react-router-dom'
import history from './history'
import UserProvider from './contexts/UserProvider'

import MenuBar from './components/menus/MenuBar'
import Footer from './components/footer/Footer'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import About from './pages/About'

function App() {
  return (
    <Router history={history}>
      <UserProvider>
        <MenuBar />
        {/* <Route path="/profile" component={Profile} /> */}

        <Route path='/' exact strict component={Home} />
        <Route path='/login' exact strict component={Login} />
        <Route path='/register' exact strict component={Register} />
        <Route path='/features' exact strict component={Features} />
        <Route path='/pricing' exact strict component={Pricing} />
        <Route path='/about' exact strict component={About} />
        <Footer />
      </UserProvider>
    </Router>
  )
}

export default App

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
