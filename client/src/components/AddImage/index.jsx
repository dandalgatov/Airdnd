import React, { useState } from 'react'
import { Segment, Form, Card, Icon, Button, Divider } from 'semantic-ui-react'
import { deleteImage, createImage } from '../../services/api'

export default function AddImage(props) {

    const { activeImages, setActiveImages, listing_id} = props
    const [newImage, setNewImage] = useState({})


    const handleNewImageChange = (e, data) => {
        setNewImage({
            ...newImage,
            [data.name]: data.value
        })
    }

    const handleNewImageSubmit = (e, data) => {
        if (newImage.url) {
            setActiveImages([
                ...activeImages, newImage
            ])
            if (listing_id) {
                createImage(listing_id, newImage)
            }
            setNewImage({ url: '' })
        } else {
            alert("Must Enter URL before adding an Image")
        }
    }

    const handleDeleteImage = (index) => {
        const imageToDelete = activeImages.splice(index, 1)
        deleteImage(imageToDelete[0].id)
        setActiveImages([...activeImages])
        console.log(activeImages)
    }
    
    
    return (
        <Segment compact padded clear>
        
            <Form onSubmit={handleNewImageSubmit}>
                <Form.Group>
                    <Form.Input action={{
                        color: 'green',
                        labelPosition: 'right',
                        icon: 'plus',
                        content: 'Add Image',
                    }}
                        actionPosition='right'
                        placeholder='https://'
                        width={16}
                        name='url'
                        value={newImage.url}
                        onChange={handleNewImageChange}
                    />
                </Form.Group>
            </Form>
            <Divider/>
            
            <Card.Group itemsPerRow={2} doubling>
                {activeImages && activeImages.map((image, index) => {
                    return <Card
                        stackable
                        image={image.url}
                        extra={<div className='ui three buttons'>
                            <Button basic color='red' onClick={() => handleDeleteImage(index)}>
                                <Icon name='trash' />
                            </Button>
                        </div>}
                    />
                })}
            </Card.Group>

        </Segment>
    )
}
