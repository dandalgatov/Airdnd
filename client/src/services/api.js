import api from './apiconfig'

//Users
export const getUser = async (id) => {
    const response = await api.get(`/users/${id}`)
    return response.data
}

export const updateUser = async (id, userData) => {
    const response = await api.put(`/users/${id}`, { user: userData })
    return response.data
}

//Listings
export const getListing = async (id) => {
    const response = await api.get(`/listings/${id}`)
    return response.data
}

export const getListings = async () => {
    const response = await api.get('/listings')
    return response.data
}

export const getUserListings = async (id) => {
    const response = await api.get(`/users/${id}/listings`)
    console.log(response.data)
    return response.data
}

export const createListing = async (listingData) => {
    const response = await api.get('/listings', listingData)
    console.log(listingData)
    return response.data
}

// Images
export const getImages = async (listing_id) => {
    const response = await api.get(`/listings/${listing_id}/images`)
    return response.data
}

export const createImage = async (listing_id, url) => {
    const response = await api.post(`/listings/${listing_id}/images`, {images: url})
    return response.data
}

//Amenities
export const getAmenities = async () => {
    const response = await api.get('/amenities')
    return response.data
}

//Neighborhoods
export const getNeighborhoods = async () => {
    const response = await api.get('/neighborhoods')
    return response.data
}

//Search Results
export const getSearchResults = async (searchParams) => {
    const response = await api.post('/listings/search', searchParams)
    return response.data
}