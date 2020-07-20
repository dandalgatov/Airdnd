import React from 'react'
import BasicSearch from '../../components/BasicSearch'




export default function Home(props) {

    const { setBasicSearchResults, neighborhoods } = props
    


    // useEffect(() => {
    //     (async () => setNeighborhoods(await getNeighborhoods()))()
    // }, [])
    
    return (
        <main>
            <div style={{height: "100vh", backgroundImage: "url(https://cdn.theculturetrip.com/wp-content/uploads/2019/01/fda03y.jpg)", backgroundSize: "cover"}}>
                SEARCH
                <BasicSearch neighborhoodOptions={neighborhoods} setBasicSearchResults={setBasicSearchResults}/>

            </div>

        </main>
    )
}
