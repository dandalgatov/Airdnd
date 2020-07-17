import React, { useState, useEffect } from 'react'
import BasicSearch from '../../components/BasicSearch'
import ListingCard from '../../components/ListingCard'

import { getNeighborhoods } from '../../services/api'

export default function Home() {

    const [neighborhoods, setNeighborhoods] = useState([])
     
    
    useEffect(() => {
        (async () => {
            const neighborhoodsData = await getNeighborhoods()
            const allNeighborhoods = []
            neighborhoodsData && neighborhoodsData.map(neighborhood => 
                allNeighborhoods.push({
                    text: neighborhood.name,
                    value: neighborhood.id
                })
            
            )
            setNeighborhoods(allNeighborhoods)
        })()
    }, [])

    // useEffect(() => {
    //     (async () => setNeighborhoods(await getNeighborhoods()))()
    // }, [])
    
    
    return (
        <main>
            <div style={{height: "100vh", backgroundImage: "url(https://cdn.theculturetrip.com/wp-content/uploads/2019/01/fda03y.jpg)", backgroundSize: "cover"}}>
                SEARCH
                <BasicSearch neighborhoodOptions={neighborhoods}/>

            </div>
            <div>
                <ListingCard />
            </div>
        </main>
    )
}
