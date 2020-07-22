import React from 'react'
import BasicSearch from '../../components/BasicSearch'
import { Image, Segment, Divider, Button, Header, Icon, Statistic } from 'semantic-ui-react'
import { Carousel } from 'react-responsive-carousel'

const carouselItems = [
    {
        img: '/financial_district.jpg',
        name: 'Financial District',
        listings: 12356
    },
    {
        img: '/soho.jpg',
        name: 'Soho',
        listings: 743
    },
    {
        img: '/hudson_yards.jpg',
        name: 'Hudson Yards',
        listings: 543
    },
    {
        img: '/upper_west_side.jpg',
        name: 'Upper West Side',
        listings: 13344
    }
]




export default function Home(props) {

    const { setBasicSearchResults, neighborhoods } = props




    return (
        <main>
            <div style={{ height: "100vh" }}>

                <BasicSearch neighborhoodOptions={neighborhoods} setBasicSearchResults={setBasicSearchResults} />
                <Segment >
                    < Carousel
                        autoPlay
                        infiniteLoop
                        showArrows={false}
                        showIndicators
                        showThumbs={false}
                        showStatus={false}
                        stopOnHover={false}
                        interval={6000}
                        transitionTime={600}



                    >
                        {carouselItems && carouselItems.length > 0 ?
                            carouselItems.map((item, idx) =>
                                <div style={{ maxHeight: "70vh", backgroundColor: 'white' }}>
                                    <Statistic.Group size='mini' widths='two'>
                                        <Statistic>
                                            <Statistic.Value text>
                                                <Icon name='map marker alternate' /> {item.name}
                                            </Statistic.Value>
                                        </Statistic>
                                        <Statistic>
                                            <Statistic.Value text>
                                                <Icon name='chart bar outline' /> {item.listings} new listings
                                            </Statistic.Value>
                                        </Statistic>
                                    </Statistic.Group>
                                    <img style={{display: 'block', objectFit: 'none'}}alt={`image ${idx + 1}`} src={process.env.PUBLIC_URL + item.img} />
                                </div>)

                            :
                            <div>
                                <img alt="No Image" src={process.env.PUBLIC_URL + '/no-image-found.png'} />
                            </div>
                        }
                    </Carousel>
                </Segment>

            </div>

        </main >
    )
}
