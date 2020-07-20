import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"


import { getAmenities, getListing } from '../../services/api'
import { Form, TextArea, Checkbox, Grid, Segment, Card, Icon, Button } from 'semantic-ui-react'
import AddImage from '../../components/AddImage'
import { createListing, editListing, deleteListing } from '../../services/api'


export default function AddListing(props) {
    const history = useHistory()
    const { id } = useParams()
    const { neighborhoodOptions, currentUser } = props
    const [activeImages, setActiveImages] = useState([])
    const [amenities, setAmenities] = useState([])
    const [listingData, setListingData] = useState({
        user_id: '',
        neighborhood_id: '',
        listing: {
            address: '',
            apt_num: '',
            zip: '',
            beds: 0,
            baths: 0,
            sqft: 0,
            rent: 0,
            security_deposit: 0,
            fee: 0,
            description: '',
            published: false
        }
    })

    const userId = currentUser && currentUser.id

    useEffect(() => {
        (async () => {
            setAmenities([await getAmenities()])
            const data = (await getListing(id))
            console.log(data)
            setListingData({
                user_id: data.user.id,
                neighborhood_id: data.neighborhood.id,
                listing: {
                    address: data.address,
                    apt_num: data.apt_num,
                    zip: data.zip,
                    beds: data.beds,
                    baths: data.baths,
                    sqft: data.sqft,
                    rent: data.rent,
                    security_deposit: data.security_deposit,
                    fee: data.fee,
                    description: data.description,
                    published: data.published
                }
            })
        })()
    }, [])


    const handlePost = async () => {
        const newListing = { ...listingData, user_id: userId, listing: { ...listingData.listing, published: true } }
        createListing(newListing)
        history.push('/profile')
    }

    const handleEdit = async () => {
        editListing(id, listingData)
        history.push('/profile')
    }

    const handleDelete = async (e) => {
        // e.preventDefault()
        await deleteListing(id)
        history.push('/profile')
    }

    const handleChange = (e, data) => {
        if (data.name === 'neighborhood_id') {
            setListingData({
                ...listingData,
                [data.name]: data.value
            })
        } else {
            setListingData({
                ...listingData, listing: {
                    ...listingData.listing,
                    [data.name]: data.value
                }
            })
        }
    }

    const bedOptions = [
        { text: 'Studio', value: 0 },
        { text: '1 Bed', value: 1 },
        { text: '2 Bed', value: 2 },
        { text: '3 Bed', value: 3 },
        { text: '4 Bed', value: 4 },
        { text: '5 Bed', value: 5 },
        { text: '6 Bed', value: 6 },
        { text: '7 Bed', value: 7 },
        { text: '8 Bed', value: 8 },
        { text: '9 Bed', value: 9 }

    ]
    const bathOptions = [
        { text: '1 Bath', value: 1 },
        { text: '2 Bath', value: 2 },
        { text: '3 Bath', value: 3 },
        { text: '4 Bath', value: 4 },
        { text: '5 Bath', value: 5 },
    ]

    console.log(listingData.listing.beds)

    return (
        <>
            <Segment>
                <Button negative onClick={handleDelete}>Delete</Button>
                <Button color='yellow' disabled >Save Draft</Button>
                <Button primary onClick={id ? handleEdit : handlePost} floated='right'>Submit</Button>
            </Segment>
            <Grid stackable >
                <Grid.Row stretched>
                    <Grid.Column width={8}>
                        <Form>
                            <Form.Group>
                                <Form.Input
                                    placeholder='Address'
                                    name='address'
                                    label='Address'
                                    value={listingData.listing.address}
                                    onChange={handleChange} width={12}
                                />
                                <Form.Input
                                    placeholder='Apt#'
                                    name='apt_num'
                                    label='Apt#'
                                    value={listingData.listing.apt_num}
                                    onChange={handleChange} width={6}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Select
                                    placeholder='Neighborhoods'
                                    name="neighborhood_id"
                                    label='Neighborhoods'
                                    value={listingData.neighborhood_id}
                                    options={neighborhoodOptions}
                                    onChange={handleChange}
                                    fluid width={12}
                                />
                                <Form.Input
                                    placeholder='ZIP Code'
                                    name='zip'
                                    label='ZIP Code'
                                    value={listingData.listing.zip}
                                    onChange={handleChange} width={6}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Select
                                    placeholder='Beds'
                                    name='beds'
                                    label='Beds'
                                    value={listingData.listing.beds}
                                    options={bedOptions}
                                    onChange={handleChange}
                                    fluid width={6}
                                />
                                <Form.Select
                                    placeholder='Baths'
                                    name='baths'
                                    label='Baths'
                                    value={listingData.listing.baths}
                                    options={bathOptions}
                                    onChange={handleChange}
                                    fluid width={6}
                                />
                                <Form.Input
                                    placeholder='SQFT'
                                    name='sqft'
                                    value={listingData.listing.sqft}
                                    onChange={handleChange} width={6}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input
                                    placeholder='Rent'
                                    name='rent'
                                    value={listingData.listing.rent}
                                    onChange={handleChange} width={6}
                                />
                                <Form.Input
                                    placeholder='Security Deposit'
                                    name='security_deposit' 
                                    value={listingData.listing.security_deposit}
                                    onChange={handleChange} width={6}
                                />
                                <Form.Input
                                    placeholder='Fee'
                                    name='fee'
                                    value={listingData.listing.fee}
                                    onChange={handleChange} width={6}
                                />
                            </Form.Group>
                            <TextArea
                                placeholder='Description'
                                name='description'
                                value={listingData.listing.description}
                                onChange={handleChange} width={16}
                            />
                            {/* {amenities && amenities.map((amenity) => {
                                return <Checkbox label={amenity.name} />
                            })} */}
                        </Form>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <AddImage activeImages={activeImages} setActiveImages={setActiveImages} />
                    </Grid.Column>
                </Grid.Row>
            </Grid >
        </>
    )
}

