import React from 'react'
import './ListingCard.css'
import { Button, Card, Header } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

export default function ListingCard(props) {

    const { id, address, apt_num, neighborhood, beds, baths, sqft, rent, fee, firstImage, created_at, ownerName, userProfile} = props

    const history = useHistory()

    const handleEditClick = (e) => {
        e.preventDefault()
        history.push(`/listings/edit/${id}`)
    }

    return (
        <Card fluid href={`/listings/${id}`}>
            <Header attached='top' style={{
                backgroundImage: `url(${firstImage ? firstImage : process.env.PUBLIC_URL + '/no-image-found.png'})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                height: '15rem'
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
                        {fee ? <span>fee: {fee}</span> : <span>NO FEE</span>}
                    </div>
                    <div>Listed on: {created_at} </div>
                    <div>Listed by: {ownerName}</div>
                </Card.Description>
            </Card.Content>

            <Card.Content extra>
                {userProfile ?
                    <div className='ui three buttons'>
                        <Button basic content='Edit' icon='edit' color='green' onClick={handleEditClick}/>
                    <Button basic disabled content='Share' icon='share alternate' color='yellow' />
                    <Button basic disabled content='Unlist' icon='remove' color='red' />
                    </div>:
                    <div className='ui three buttons'>
                        <Button basic disabled content='Save' icon='save' color='green' />
                        <Button basic disabled content='Share' icon='share alternate' color='yellow'/>
                        <Button basic disabled content='Hide' icon='hide' color='blue' />
                    </div>
                }
            </Card.Content>
        </Card>
    )
}
