import React from 'react'
import './ListingCard.css'
import { Button, Card, Header } from 'semantic-ui-react'

export default function ListingCard(props) {

    const { id, address, apt_num, neighborhood, beds, baths, sqft, rent, fee, firstImage, created_at, ownerName } = props
    
    return (
        <Card fluid href={`/listings/${id}`}>    
            <Header attached='top' style={{
                backgroundImage: `url(${firstImage? firstImage: process.env.PUBLIC_URL + '/no-image-found.png'})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                height: '50vh'
            }} />
            <Card.Content>
                <Card.Header>{address} #{apt_num}</Card.Header>
                <Card.Meta>{neighborhood}</Card.Meta>
                <Card.Description >
                    <div>
                        <span>{beds} beds</span>
                        <span>{baths} baths</span>
                        <span>{sqft} sqft</span>
                    </div>
                    <div>
                        <span>${rent}</span>
                        {fee ? <span>fee: {fee}</span> : <span>NO FEE</span> }
                    </div>
                    <div>Listed on: {created_at} </div>
                    <div>Listed by: {ownerName}</div>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                    <div className='ui three buttons'>
                    <Button basic content='Save' icon='save' color='green' />
                    <Button basic content='Share' icon='share alternate' color='yellow' />
                    <Button basic content='Hide' icon='hide' color='blue'/>                      
                    </div>
                </Card.Content>
        </Card>
    )
}
