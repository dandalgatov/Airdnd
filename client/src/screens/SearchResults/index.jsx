import React, { useState } from 'react'
import { Card } from 'semantic-ui-react'
import ListingCard from '../../components/ListingCard'

export default function SearchResults(props) {
    const { basicSearchResults } = props
    const [searchResultsLength, setSearchResultsLength] = useState(50)
    

    return (
        <Card.Group itemsPerRow={4} stackable doubling centered>
            {basicSearchResults && basicSearchResults.slice(0, searchResultsLength).map((r, index) => {
                return <ListingCard
                    id={r.id}
                    address={r.address}
                    apt_num={r.apt_num}
                    neighborhood={r.neighborhood.name}
                    beds={r.beds}
                    baths={r.baths}
                    sqft={r.sqft}
                    rent={r.rent}
                    fee={r.fee}
                    firstImage={r.images && r.images[0] && r.images[0].url}
                    created_at={new Date(r.created_at).toLocaleDateString()}
                    ownerName={[r.user.first_name, r.user.last_name].join(' ')}
                />
            }
            )}
        </Card.Group>
    )
}

