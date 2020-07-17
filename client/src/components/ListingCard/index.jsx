import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;

export default function ListingCard() {
    return (
        <Card style={{ width: 300 }} cover={
            <img src="https://picsum.photos/300/200" />
        }>
            <Meta title="address" description={
                <>
                    <div>neighborhood</div>
                    <div>
                        <span>beds</span>
                        <span>baths</span>
                        <span>sqft</span>
                    </div>
                    <div>
                        <span>rent</span>
                        <span>fee</span>
                    </div>
                    <div>Listed on:</div>
                    <div>Listed by:</div>
                </>
            }></Meta>
        </Card>
    )
}
