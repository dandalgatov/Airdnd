import React, { useState, useEffect, useHistory } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Container, Divider } from 'semantic-ui-react'

import { verifyUser } from './services/auth'
import { getUserListings } from './services/api'

import Home from './screens/Home'
import AddListing from './screens/AddListing'
import SearchResults from './screens/SearchResults'
import ListingDetails from './screens/ListingDetails'
import UserProfile from './screens/UserProfile'
import { getNeighborhoods } from './services/api'

import Header from './components/Header'

export default function App() {

  const [basicSearchResults, setBasicSearchResults] = useState({})
  const [neighborhoods, setNeighborhoods] = useState([])

  const [currentUser, setCurrentUser] = useState()
  const [userListings, setUserListings] = useState()



  useEffect(() => {
    (async () => {
      setCurrentUser(await verifyUser())
      currentUser && setUserListings(await getUserListings(currentUser && currentUser.id))
      const neighborhoodsData = await getNeighborhoods()
      const allNeighborhoods = []
      neighborhoodsData && neighborhoodsData.map(neighborhood =>
        allNeighborhoods.push({
          text: neighborhood.name,
          value: neighborhood.id
        })
      )
      setNeighborhoods(allNeighborhoods)
    })()
  }, [])

console.log(currentUser && currentUser.id)

  return (
    <>
      {/* <Container> */}
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Divider hidden />


      <Container>
        <Switch>

          <Route exact path="/" render={() =>
            <Home
              setBasicSearchResults={setBasicSearchResults}
              neighborhoods={neighborhoods}
            />} />


          <Route exact path="/search_results" render={() =>
            <SearchResults
              setBasicSearchResults={setBasicSearchResults}
              basicSearchResults={basicSearchResults}
            />} />

          <Route exact path="/listings/:id" render={() =>
            <ListingDetails
              setBasicSearchResults={setBasicSearchResults}
              basicSearchResults={basicSearchResults}
            />} />

          <Route exact path="/listing/add" render={() =>
            <AddListing
              neighborhoodOptions={neighborhoods}
              currentUser={currentUser}
            />} />

          <Route exact path="/profile" render={() =>
            <UserProfile
              currentUser={currentUser && currentUser} 
              setCurrentUser={setCurrentUser}
              userListings={userListings}
              setUserListings={setUserListings}
            />} />
        </Switch>
      </Container>
      {/* </Container> */}
    </>

  )
}
