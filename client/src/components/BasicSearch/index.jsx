import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { getSearchResults } from '../../services/api'



export default function BasicSearch(props) {

    const { neighborhoodOptions, setBasicSearchResults } = props
    const [basicSearch, setBasicSearch] = useState({})

    const history = useHistory()

    const rentOptions = [
        { text: '$500', value: '500' },
        { text: '$750', value: '750' },
        { text: '$1,000', value: '1000' },
        { text: '$1,250', value: '1250' },
        { text: '$1,500', value: '1500' },
        { text: '$1,750', value: '1750' },
        { text: '$2,000', value: '2000' },
        { text: '$2,500', value: '2500' },
        { text: '$3,000', value: '3000' },
        { text: '$3,500', value: '3500' },
        { text: '$4,000', value: '4000' },
        { text: '$4,500', value: '4500' },
        { text: '$5,000', value: '5000' },
        { text: '$6,000', value: '6000' },
        { text: '$7,000', value: '7000' },
        { text: '$8,000', value: '8000' },
        { text: '$9,000', value: '9000' },
        { text: '$10,000', value: '10000' },
        { text: '$12,500', value: '12500' },
        { text: '$15,000', value: '15000' },
    ]

    const bedOptions = [
        { text: 'Studio', value: '0' },
        { text: '1 Bed', value: '1' },
        { text: '2 Bed', value: '2' },
        { text: '3 Bed', value: '3' },
        { text: '4 Bed', value: '4' },
        { text: '5 Bed', value: '5' },
    ]

    const handleChange = (e, data) => {
        setBasicSearch({
            ...basicSearch,
            [data.name]: data.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setBasicSearchResults(await getSearchResults(basicSearch))
        history.push("/search_results")
    }


    return (
            <Segment >
                <Form onSubmit={handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Select
                            width={6}
                            fluid
                            name="neighborhood_id"
                            options={neighborhoodOptions}
                            placeholder='Neighborhoods'
                            onChange={handleChange}
                        />
                        <Form.Select
                            width={4}
                            fluid
                            name="min_rent"
                            options={rentOptions}
                            placeholder='$Minimum'
                            onChange={handleChange}
                        />
                        <Form.Select
                            width={4}
                            fluid
                            name="max_rent"
                            options={rentOptions}
                            placeholder='$Maximum'
                            onChange={handleChange}
                        />
                        <Form.Select
                            width={4}
                            fluid
                            name="min_beds"
                            options={bedOptions}
                            placeholder='Min Beds'
                            onChange={handleChange}
                        />
                        <Form.Select
                            width={4}
                            fluid
                            name="max_beds"
                            options={bedOptions}
                            placeholder='Max Beds'
                            onChange={handleChange}
                        />
                        <Button basic color="blue">Advanced</Button>
                        <Button type="submit" primary>Submit</Button>
                    </Form.Group>
                </Form>
            </Segment>
    )
}