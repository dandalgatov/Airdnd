import React, { useState, useEffect, useHistory } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { loginUser, verifyUser, registerUser } from './services/auth'

import Home from './screens/Home'
import SignIn from './screens/SignIn'
import EditListing from './screens/SignIn'

import Header from './components/Header'

export default function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [userData, setUserData] = useState(
    {
      username: '',
      password: ''
    }
  )

  // useEffect(() => {
  //   (async () => setCurrentUser(await verifyUser()))()
  // })

  const handleChange = (event) => {
    const { name, value } = event.target
    setUserData({ ...userData, [name]: value })
  }

  const loginSubmit = async (event) => {
    event.preventDefault()
    setCurrentUser(await loginUser(userData))
  }

  const handleRegister = async (event) => {
    event.preventDefault()
    setCurrentUser(await registerUser(userData))
    // useHistory().push('/')
  }

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" render={() =>
          <SignIn
            handleChange={handleChange}
            userData={userData}
            handleLogin={loginSubmit}
            currentUser={currentUser}
            handleRegister={handleRegister}
          />} />
        <Route exact path="/listing/new" component={EditListing} />
      </Switch>
    </div>
  )
}
