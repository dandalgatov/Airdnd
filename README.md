# Airdnd README <!-- omit in toc -->


- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Airdnd** is a website aimed to address an age old problem. Millions of people are trying to find their space in a big city. With Airdnd you can post and find apartments for rent. Find the right space for you!_


<br>

## MVP


The **Airdnd** MVP is to be able to: 
1. Create an Account
2. Post, Read, Edit, and Delete a listing._
3. Save listings to your account

<br>

### Goals

- _Create a working model._
- _Provide a consistant and pleasant user experience._
- _Give user powerful tools without overwhelming them with options._
- _Simplify apartment finding process._


<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|     React      | _Building user interface._ |
|  React Router  | _Collection of navigational components._ |
|    Cors    | _Connect Express middleware._ |
|    Body Parser    | _Formats data for JSON_ |
|    Material UI   | _CSS library._ |
|    Axios    | _Sends API calls._ |
|    Fontawesome    | _Imports svg icons._ |
|    Underscore  | _A suite of 100+ specialized functions/_ |

<br>

### Client (Front End)

#### Wireframes

Full set of wireframes: https://whimsical.com/7Z6if3n9vCX8BgwJydjC4Q@3CRerdhrAw99WGVq3Hkane9v

![Home Desktop](https://i.imgur.com/4wkXvYR.png)

- Home Page

![Home Mobile](https://imgur.com/APkSyaj.png)

- Home Page Mobile

![Edit Listing](https://imgur.com/u6h7YBp.png)

- Edit Listing

![Listing Details](https://imgur.com/LZsvKiD.png)

- Listing Details

![Search Results](https://imgur.com/wWCFE1x.png)

- Search Results


#### Component Tree

https://whimsical.com/3M9WnVXRbSuP2of1yXREs7@3CRerdhrAw8kN7Dybrj4e1dL

#### Component Hierarchy



``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ SearchBar.jsx
      |__ SignIn.jsx
      |__ BasicSearch.jsx
      |__ AdvancedSearch.jsx
      |__ TopPlaces.jsx
      |__ TopUsers.jsx
      |__ ExistingUserSignIn.jsx
      |__ Register.jsx
      |__ UserControls.jsx
      |__ UserInfo.jsx
      |__ UserListingSettings.jsx
      |__ UserListings.jsx
      |__ UserSavedListings.jsx
      |__ UpdatePassword.jsx
      |__ ListingImages.jsx
      |__ ListingData.jsx
      |__ AddListingMenu.jsx
      |__ ListingDescription.jsx
      |__ OwnerCard.jsx
      |__ ListingDetailMenu.jsx
      |__ OwnerListings.jsx
      |__ Rate.jsx
      |__ SortBy.jsx
      |__ SearchResultBar.jsx
      |__ ListingCard.jsx   
|-- screens/
      |__ Home.jsx
      |__ SingIn.jsx
      |__ Profile.jsx
      |__ ListingDetails.jsx
      |__ AddListing.jsx
      |__ EditListing.jsx
      |__ AddListing.jsx
      |__ SearchResults.jsx
      |__ ownerProfile.jsx
|__ services/
      |__ apiConfig.js
      |__ controler.js



```

#### Component Breakdown



|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|   Header | functional |   y   |   y   | _Header contains Search Bar, Sign in option, and Users profile picture._               |
|  SearchBar  | functional |   n   |   n   | _Allows you to find listings quicker. Either by address or by neighborhood._       |
|   SignIn    |   functional    |   n   |   n   | _Houses SignIn and Register Options._      |
| Basic Search | functional |   y   |   y   | _Gives users ability to search for listings using basic search criteria_                 |
|    Advanced Search   | functional |   n   |   n   | _Provides additional search parapeters for user._ |
|    TopPlaces   | functional |   n   |   n   | _SHows user top saved listings on the website._ |
|    TopUsers   | functional |   n   |   n   | _Shows user top rated owners on the website._ |
|    ExistingUserSignIn   | functional |   n   |   n   | _Allows a user with existing account sign in._ |
|    Register   | functional |   n   |   n   | _Allows brand new user sign up._ |
|    UserControls   | functional |   n   |   n   | _Gives user ability to upodate their account info._ |
|    UserInfo   | functional |   n   |   n   | _Displays user's information._ |
|    UserListingSettings   | functional |   n   |   n   | _Gives user control for their own or their saved listings._ |
|    UserListings   | functional |   n   |   n   | _Shows Listings added by the user._ |
|    UserSavedListings   | functional |   n   |   n   | _Shows listings saved by the user._ |
|    UpdatePassword   | functional |   n   |   n   | _Allows user to update their own password._ |
|    ListingImages   | functional |   n   |   n   | _Shows a caurusel of listing images._ |
|    ListingData   | functional |   n   |   n   | _Shows listing data._ |
|    AddListingMenu   | functional |   n   |   n   | _Provides menu for adding listings._ |
|    ListingDescription   | functional |   n   |   n   | _Shows listing description._ |
|    OwnerCard   | functional |   n   |   n   | _Displayes information about the owner of the listing._ |
|    Rate   | functional |   n   |   n   | _Allows everyone to see that users rating and allows them to rate the user as well._ |
|    SortBy   | functional |   n   |   n   | _Sorting of listings by date, price, or size._ |
|    SearchResultBar   | functional |   n   |   n   | _Gives menu options from the search result page like advanced search and save search.._ |
|    ListingCard   | functional |   n   |   n   | _Displays all the core listing info and it's options on a card._ |


#### Time Estimates



| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| BackEnd  |    H    |     10 hrs      |     0 hrs     |    TBD    |
| Home  |    M    |     4 hrs      |     0 hrs     |    TBD    |
| Sign In  |    H    |     8 hrs      |     0 hrs     |    TBD    |
| Profile  |    L   |     8 hrs      |     0 hrs     |    TBD    |
| Add Listing  |    H    |     8 hrs      |     0 hrs     |    TBD    |
| Edit Listing |    H    |     3 hrs      |     0 hrs     |    TBD    |
| Listing Details  |    H    |     8 hrs      |     0 hrs     |    TBD    |
| Owner's Profile  |    H    |     8 hrs      |     0 hrs     |    TBD    |
| Search Results  |    H    |      8hrs      |     0 hrs     |    TBD    |
| TOTAL |        |     65 hrs      |     0 hrs     |    TBD    |




<br>

### Server (Back End)

#### ERD Model

![ERD Model](https://imgur.com/1QzjO9k.png)

<br>

***

## Post-MVP

Adding following functionality:<br>
Share (Social media/Copy link) <br>
Rate (More robust rating algorithm)<br>
Authentication Cofirmation (send confirmation email to user's email and text to phone) <br>


***

## Code Showcase



## Code Issues & Resolutions
