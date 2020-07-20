import React, { useState } from 'react'
import { Form, Grid, Segment, Card, Icon, Button, Item, Image } from 'semantic-ui-react'
import ListingCard from '../../components/ListingCard/'
import { updateUser } from '../../services/api'
import { useHistory } from 'react-router-dom'

export default function UserProfile(props) {
    const { currentUser, setCurrentUser, userListings, setUserListings } = props
    const history = useHistory()
    // const { id, first_name, last_name, email, phone, profile_picture, rating, } = currentUser


    //Whats goiing on here??
    const id = currentUser && currentUser.id
    const first_name = currentUser && currentUser.first_name
    const last_name = currentUser && currentUser.last_name
    const email = currentUser && currentUser.email
    const phone = currentUser && currentUser.phone
    const profile_picture = currentUser && currentUser.profile_picture
    const rating = currentUser && currentUser.rating



    const handleChange = (event) => {
        const { name, value } = event.target
        setCurrentUser({ ...currentUser, [name]: value })
    }

    const handleUserUpdate = async (e) => {
        e.preventDefault()
        setCurrentUser(await updateUser(id, currentUser))
        console.log(id, currentUser)
    }

   console.log(userListings && userListings)



    return (
        <>
            <Segment>
                <Button primary onClick={handleUserUpdate}>Update Info</Button>
                <Button primary >Update Password</Button>
                <Button color='green' floated='right' onClick={()=> history.push('/listing/add')}>Post Listing</Button>
            </Segment>
            <Grid stackable columns={2}>
                <Grid.Row stretched>
                    <Grid.Column width={4}>
                        <Segment>
                            <Image bordered size='medium' src={profile_picture ? profile_picture : process.env.PUBLIC_URL + '/no_profile_picture.jpg'} />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Segment>
                            <Form onChange={handleChange}>
                                <Form.Group widths='equal'>
                                    <Form.Input
                                        fluid
                                        label='First name'
                                        placeholder={first_name ? first_name : 'First name'}
                                        value={first_name}
                                        name='first_name'
                                    />
                                    <Form.Input
                                        fluid
                                        label='Last name'
                                        placeholder={last_name ? last_name : 'Last name'}
                                        value={last_name}
                                        name='last_name'
                                    />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Input
                                        fluid
                                        label='Email'
                                        placeholder={email ? email : 'Email'}
                                        value={email}
                                        name='email'
                                    />
                                    <Form.Input
                                        fluid
                                        label='Phone'
                                        placeholder={phone ? phone : 'Phone'}
                                        value={phone}
                                        name='phone'
                                    />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Input
                                        fluid
                                        label='Picture URL'
                                        placeholder={profile_picture ? profile_picture : 'Picture URL'}
                                        value={profile_picture}
                                        name='profile_picture'
                                    />
                                </Form.Group>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            <Card.Group itemsPerRow={2} stackable doubling centered>
            {userListings && userListings.map((r, index) => {
                return <ListingCard
                    id={r.id}
                    address={r.address}
                    apt_num={r.apt_num}
                    neighborhood={r.neighborhood.name}
                    beds={r.beds}
                    baths={r.baths}
                    sqft={r.sqft}
                    rent={r.rent}
                    fee={r.fee}
                    firstImage={r.images && r.images[0] && r.images[0].url}
                    created_at={new Date(r.created_at).toLocaleDateString()}
                    ownerName={[r.user.first_name, r.user.last_name].join(' ')}
                />
            }
            )}
            </Card.Group>

        </>
    )
}

