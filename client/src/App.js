import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container, Divider } from 'semantic-ui-react'
import './App.css'

import { verifyUser } from './services/auth'


import Home from './screens/Home'
import AddListing from './screens/AddListing'
import SearchResults from './screens/SearchResults'
import ListingDetails from './screens/ListingDetails'
import UserProfile from './screens/UserProfile'
import { getNeighborhoods } from './services/api'

import Header from './components/Header'

export default function App() {

  const [basicSearchResults, setBasicSearchResults] = useState()
  const [neighborhoods, setNeighborhoods] = useState([])
  const [currentUser, setCurrentUser] = useState()

  console.log(basicSearchResults)


  useEffect(() => {
    (async () => {
      setCurrentUser(await verifyUser())
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


  return (
    <div className='App'>
      
      <Container>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />



      {/* <Container> */}
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
              neighborhoods={neighborhoods}
            />} />

          <Route exact path="/listings/add" render={() =>
            <AddListing
              neighborhoodOptions={neighborhoods}
              currentUser={currentUser}
            />} />
          
          <Route exact path="/listings/edit/:id" render={() =>
            <AddListing
              neighborhoodOptions={neighborhoods}
              currentUser={currentUser}
            />} />
          
          
          
          
          <Route exact path="/listings/:id" render={() =>
            <ListingDetails
              setBasicSearchResults={setBasicSearchResults}
              basicSearchResults={basicSearchResults}
            />} />

          

          <Route exact path="/profile" render={() =>
            <UserProfile
              currentUser={currentUser && currentUser} 
              setCurrentUser={setCurrentUser}
            />} />
        </Switch>
      </Container>
      {/* </Container> */}
    </div>

  )
}
