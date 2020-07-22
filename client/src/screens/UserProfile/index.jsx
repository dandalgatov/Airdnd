import React, { useState,  useEffect, } from 'react'
import { Form, Grid, Segment, Card, Button, Image, Divider } from 'semantic-ui-react'
import ListingCard from '../../components/ListingCard/'
import { updateUser } from '../../services/api'
import { useHistory } from 'react-router-dom'
import { getUserListings } from '../../services/api'
import { verifyUser } from '../../services/auth'

export default function UserProfile(props) {
    const { currentUser, setCurrentUser } = props
    const history = useHistory()
    const [userListings, setUserListings] = useState([])
    const { id, first_name, last_name, email, phone, profile_picture } = currentUser || {}

    useEffect(() => {
        (async () => {
            const user = await verifyUser()
            user && user.id && setUserListings(await getUserListings(user.id))
        })()
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target
        setCurrentUser({ ...currentUser, [name]: value })
    }

    const handleUserUpdate = async (e) => {
        e.preventDefault()
        setCurrentUser(await updateUser(id, currentUser))
    }


    return (
        <>
            <Segment>
                <Button primary onClick={handleUserUpdate}>Update Info</Button>
                <Button primary disabled >Update Password</Button>
                <Button color='green' floated='right' onClick={()=> history.push('/listings/add')}>Post Listing</Button>
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
                                        value={last_name ? last_name : 'Last name'}
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

            <Divider horizontal>Your current listings</Divider>

            <Card.Group itemsPerRow={4} stackable doubling centered>
            {userListings && userListings.map((r, index) => {
                return <ListingCard
                    userProfile={true}
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
            })}
            </Card.Group>


        </>
    )
}

