import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { getListing } from '../../services/api'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Grid, Card, Button, Icon, Segment, Item, Rating } from 'semantic-ui-react'

export default function ListingDetails(props) {

    const { id } = useParams()
    const [listingDetails, setListingDetails] = useState([])

    const { address, apt_num, neighborhood, beds, baths, sqft, rent, fee, images, description, created_at, user } = listingDetails



    useEffect(() => {
        (async () => setListingDetails(await getListing(id)))()
    }, [id])

    console.log(images)




    return (
        <Grid stackable columns={2}>
            <Grid.Row stretched>
                <Grid.Column width={12}>
                    <Segment>
                        <Carousel showArrows={true} showIndicators={false}>
                            {images && images.length > 0 ? images.map((img, idx) => <div><img alt={`image ${idx + 1}`} src={img.url} /></div>) : <div><img alt="No Image" src={process.env.PUBLIC_URL + '/no-image-found.png'} /></div>}
                        </Carousel>
                    </Segment>
                </Grid.Column>

                <Grid.Column width={4}>
                    <Card fluid>

                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button basic icon='arrow left' color='grey' />
                                <Button basic icon='arrow right' color='grey' />
                            </div>
                        </Card.Content>


                        <Card.Content >
                            <Card.Header>{address} #{apt_num}</Card.Header>
                            <Card.Meta>{neighborhood && neighborhood.name}</Card.Meta>
                            <Card.Description >
                                <div>
                                    <span>{beds} beds</span>
                                    <span>{baths} baths</span>
                                    <span>{sqft} sqft</span>
                                </div>
                                <div>
                                    <span>${rent}</span>
                                    {fee ? <span>fee: {fee}</span> : <span>NO FEE</span>}
                                </div>
                                <div>Listed on: {new Date(created_at).toLocaleDateString()} </div>
                            </Card.Description>
                        </Card.Content>

                        <Card.Content >
                            <div><Icon name='paw' />Pets Allowed</div>
                            <div><Icon name='box' />Storage Available</div>
                            <div><Icon name='male' />Doorman</div>
                            <div><Icon name='car' />Garage Parking</div>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui three buttons'>
                                <Button disabled basic content='Save' icon='save' color='green' />
                                <Button disabled basic content='Share' icon='share alternate' color='yellow' />
                                <Button disabled basic content='Hide' icon='hide' color='blue' />
                            </div>
                        </Card.Content>
                    </Card>
                    
                </Grid.Column>
            </Grid.Row>


            <Grid.Row stretched>
                <Grid.Column width={12}>
                    <Segment style={{overflow: 'auto', maxHeight: 200 }}>

                        {description ? description : "No Description..."}
                    </Segment>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Item.Group>
                        <Item>
                            <Item.Image avatar size="tiny" src={user && user.profile_picture ? user.profile_picture : process.env.PUBLIC_URL + '/no_profile_picture.jpg'} />
                            <Item.Content verticalAlign='middle'>
                                <Item.Header>Listed By:</Item.Header>
                                <Item.Meta >
                                    <span>{user && [user.first_name, user.last_name].join(' ')}</span>
                                </Item.Meta>

                                <Item.Extra>
                                    <Rating icon='star' defaultRating={5} maxRating={5} />
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}


