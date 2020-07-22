import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"


import { getAmenities, getListing } from '../../services/api'
import { Form, TextArea, Grid, Segment, Button } from 'semantic-ui-react'
import AddImage from '../../components/AddImage'
import { createListing, editListing, deleteListing, createImage } from '../../services/api'


export default function AddListing(props) {
    const history = useHistory()
    const { id } = useParams()
    const { neighborhoodOptions, currentUser } = props
    const [activeImages, setActiveImages] = useState([])
    // const [amenities, setAmenities] = useState([])
    const [listingData, setListingData] = useState({
        user_id: '',
        neighborhood_id: '',
        listing: {
            address: '',
            apt_num: '',
            zip: '',
            beds: '',
            baths: '',
            sqft: '',
            rent: '',
            security_deposit: '',
            fee: '',
            description: '',
            published: false
        }
    })


    useEffect(() => {
        (async () => {
            // setAmenities([await getAmenities()])
            const data = (await getListing(id))
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
            data.images && setActiveImages(data.images)
        })()
    }, [])

    const handlePost = async () => {
        const { address, apt_num, beds, baths, rent } = listingData.listing
        const { neighborhood_id } = listingData
        if (address && apt_num && neighborhood_id && beds && baths && rent) {
            const user_id = currentUser && currentUser.id
            const newListing = { ...listingData, user_id: user_id, listing: { ...listingData.listing, published: true } }
            const savedListing = await createListing(newListing)
            activeImages.forEach(image => createImage(savedListing.id, image))
            history.push('/profile')
        }else {
            alert('Please fill out all the required fields.')
        }

    }

    const handleEdit = async () => {
        editListing(id, listingData)
        history.push('/profile')
    }

    const handleDelete = async () => {
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
                                    required
                                    value={listingData.listing.address}
                                    onChange={handleChange} width={12}
                                />
                                <Form.Input
                                    placeholder='Apt#'
                                    name='apt_num'
                                    label='Apt#'
                                    required
                                    value={listingData.listing.apt_num}
                                    onChange={handleChange} width={6}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Select
                                    placeholder='Neighborhoods'
                                    name="neighborhood_id"
                                    label='Neighborhoods'
                                    required
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
                                    required
                                    value={listingData.listing.beds}
                                    options={bedOptions}
                                    onChange={handleChange}
                                    fluid width={6}
                                />
                                <Form.Select
                                    placeholder='Baths'
                                    name='baths'
                                    label='Baths'
                                    required
                                    value={listingData.listing.baths}
                                    options={bathOptions}
                                    onChange={handleChange}
                                    fluid width={6}
                                />
                                <Form.Input
                                    placeholder='SQFT'
                                    name='sqft'
                                    label='SQFT'
                                    value={listingData.listing.sqft}
                                    onChange={handleChange} width={6}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input
                                    placeholder='Rent'
                                    name='rent'
                                    label='Rent'
                                    required
                                    value={listingData.listing.rent}
                                    onChange={handleChange} width={6}
                                />
                                <Form.Input
                                    placeholder='Security Deposit'
                                    name='security_deposit'
                                    label='Security Deposit'
                                    value={listingData.listing.security_deposit}
                                    onChange={handleChange} width={6}
                                />
                                <Form.Input
                                    placeholder='Fee'
                                    name='fee'
                                    label='Fee'
                                    value={listingData.listing.fee}
                                    onChange={handleChange} width={6}
                                />
                            </Form.Group>
                            <Form.Field
                                control={TextArea}
                                placeholder='Description'
                                name='description'
                                label='Decription'
                                value={listingData.listing.description}
                                onChange={handleChange} width={16}
                            />
                            {/* {amenities && amenities.map((amenity) => {
                                return <Checkbox label={amenity.name} />
                            })} */}
                        </Form>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <AddImage activeImages={activeImages} setActiveImages={setActiveImages} listing_id={id} />
                    </Grid.Column>
                </Grid.Row>
            </Grid >
        </>
    )
}

