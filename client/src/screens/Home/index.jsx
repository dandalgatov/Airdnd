import React from 'react'
import BasicSearch from '../../components/BasicSearch'
import ListingCard from '../../components/ListingCard'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'

export default function Home() {
    return (
        <main>
            <div style={{height: "100vh", backgroundImage: "url(https://cdn.theculturetrip.com/wp-content/uploads/2019/01/fda03y.jpg)", backgroundSize: "cover"}}>
                SEARCH
                <BasicSearch />
                {/* <img style={{width: "100vw"}}src="https://cdn.theculturetrip.com/wp-content/uploads/2019/01/fda03y.jpg" alt=""/> */}
            </div>
            <div>
                <ListingCard />
            </div>
        </main>
    )
}
