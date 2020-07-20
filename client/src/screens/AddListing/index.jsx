import React, { useState, useEffect } from 'react'
import { getAmenities } from '../../services/api'
import { Form, TextArea, Checkbox, Grid, Segment, Card, Icon, Button } from 'semantic-ui-react'
import AddImage from '../../components/AddImage'
import { createListing } from '../../services/api'


export default function AddListing(props) {
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
            description: '',
            published: false
        }
    })

    useEffect(() => {
        (async () => setAmenities([...await getAmenities()]))()
    }, [])

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

    console.log(currentUser && currentUser.id)

    const handlePost = async () => {
        // const user_id = currentUser.id && currentUser.id
        setListingData({ ...listingData.listing, published: true })
        setListingData({ ...listingData, user_id: currentUser.id && currentUser.id})
        await createListing(listingData)
    }

    const bedOptions = [
        { text: 'Studio', value: '0' },
        { text: '1 Bed', value: '1' },
        { text: '2 Bed', value: '2' },
        { text: '3 Bed', value: '3' },
        { text: '4 Bed', value: '4' },
        { text: '5 Bed', value: '5' },
    ]
    const bathOptions = [
        { text: '1 Bath', value: '1' },
        { text: '2 Bath', value: '2' },
        { text: '3 Bath', value: '3' },
        { text: '4 Bath', value: '4' },
        { text: '5 Bath', value: '5' },
    ]



    return (
        <>
            <Segment>
                <Button negative>Delete</Button>
                <Button color='yellow' >Save Draft</Button>
                <Button primary onClick={handlePost} floated='right'>Post</Button>
            </Segment>
            <Grid stackable >
                <Grid.Row stretched>
                    <Grid.Column width={8}>
                        <Form>
                            <Form.Group>
                                <Form.Input placeholder='Address' name='address' onChange={handleChange} width={12} />
                                <Form.Input placeholder='Apt#' name='apt_num' onChange={handleChange} width={6} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Select
                                    width={12}
                                    fluid
                                    name="neighborhood_id"
                                    options={neighborhoodOptions}
                                    placeholder='Neighborhoods'
                                    onChange={handleChange}
                                />
                                <Form.Input placeholder='ZIP Code' name='zip' onChange={handleChange} width={6} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Select
                                    width={6}
                                    fluid
                                    name="beds"
                                    options={bedOptions}
                                    placeholder='Beds'
                                    onChange={handleChange}
                                />
                                <Form.Select
                                    width={6}
                                    fluid
                                    name="baths"
                                    options={bathOptions}
                                    placeholder='Baths'
                                    onChange={handleChange}
                                />
                                <Form.Input placeholder='SQFT' name='sqft' onChange={handleChange} width={6} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input placeholder='Rent' name='rent' onChange={handleChange} width={6} />
                                <Form.Input placeholder='Security Deposit' name='security_deposit' onChange={handleChange} width={6} />
                                <Form.Input placeholder='Fee' name='fee' onChange={handleChange} width={6} />
                            </Form.Group>
                            <TextArea placeholder='Description' name='description' onChange={handleChange} width={16} />
                            {amenities && amenities.map((amenity) => {
                                return <Checkbox label={amenity.name} />
                            })}
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

