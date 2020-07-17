import api from './apiconfig'

export const getListings = async () => {
    const response = await api.get('/listings')
    return response.data
}

export const getNeighborhoods = async () => {
    const response = await api.get('/neighborhoods')
    return response.data
}

// export const getBooks = async (id) => {
//     const response = await api.get(`/authors/${id}/books`)
//     return response.data
// }

// export const addBook = async (id, bookInfo) => {
//     const response = await api.post(`/authors/${id}/books`, { book: bookInfo })
//     return response.data
// }