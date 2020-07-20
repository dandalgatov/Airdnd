import React, { useState } from 'react'
import { Segment, Form, Card, Icon, Button, Divider } from 'semantic-ui-react'

export default function AddImage(props) {

    const { activeImages, setActiveImages} = props
    const [newImage, setNewImage] = useState({})


    const handleNewImageChange = (e, data) => {
        setNewImage({
            ...newImage,
            [data.name]: data.value
        })
    }

    const handleNewImageSubmit = (e, data) => {
        if (newImage.imageUrl) {
            setActiveImages([
                ...activeImages, newImage
            ])
            setNewImage({ imageUrl: '' })
        } else {
            alert("Must Enter URL before adding an Image")
        }
        
    }

    const handleDeleteImage = (index) => {
        activeImages.splice(index, 1)
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
                        name='imageUrl'
                        value={newImage.imageUrl}
                        onChange={handleNewImageChange}
                    />
                </Form.Group>
            </Form>
            <Divider />
            <Card.Group itemsPerRow={2} doubling>
                {activeImages && activeImages.map((image, index) => {
                    return <Card
                        stackable
                        image={image.imageUrl}
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
