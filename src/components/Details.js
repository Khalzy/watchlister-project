import React from 'react'
import { DetailsCover } from './DetailsCover';

const Details = (props) => {
    const details = props.location.state;

    return (
        <div>
            <DetailsCover details={details.results}></DetailsCover>
        </div>
    )
}

export default Details
