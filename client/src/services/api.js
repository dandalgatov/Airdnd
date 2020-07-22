import api from './apiconfig'

//Users
export const getUser = async (id) => {
    try {
        const response = await api.get(`/users/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const updateUser = async (id, userData) => {
    try {
        const response = await api.put(`/users/${id}`, { user: userData })
        return response.data
    } catch (error) {
        throw error
    }
}

//Listings
export const getListing = async (id) => {
    try {
        const response = await api.get(`/listings/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const getUserListings = async (id) => {
    try {
        const response = await api.get(`/users/${id}/listings`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const createListing = async (listingData) => {
    try {
        const response = await api.post('/listings', listingData)
        return response.data
    } catch (error) {
        throw error
    }
}

export const editListing = async (id, listingData) => {
    try {
        const response = await api.put(`/listings/${id}`, listingData)
        return response.data
    } catch (error) {
        throw error
    }
}

export const deleteListing = async (id) => {
    try {
        const response = await api.delete(`/listings/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

// Images
export const getImages = async (listing_id) => {
    try {
        const response = await api.get(`/listings/${listing_id}/images`)
        return response.data
    } catch (error) {
        throw error
    }
}


export const createImage = async (listing_id, imageData) => {
    try {
        console.log(listing_id)
        console.log(imageData)
        const response = await api.post(`/listings/${listing_id}/images`, { image: imageData })
        return response.data
    } catch (error) {
        throw error
    }
}

export const deleteImage = async (image_id) => {
    try {
        const response = await api.delete(`/images/${image_id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

//Amenities
export const getAmenities = async () => {
    try {
        const response = await api.get('/amenities')
        return response.data
    } catch (error) {
        throw error
    }
}

//Neighborhoods
export const getNeighborhoods = async () => {
    try {
        const response = await api.get('/neighborhoods')
        return response.data
    } catch (error) {
        throw error
    }
}

//Search Results
export const getSearchResults = async (searchParams) => {
    try {
        const response = await api.post('/listings/search', searchParams)
        return response.data
    } catch (error) {
        throw error
    }
}