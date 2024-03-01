import React from 'react';
import CloudIcon from '../assets/cloud.png';

const TopSection = ({data}) => {
    return (
        <div className="top">
            <div className="location">
                <div>
                    <p className='name'>{data.name}</p>
                </div>

                <div className="description1">
                    <p className='cloud'>{data.weather[0].main}</p>
                </div>
            </div>
            <div className="description">
                <img className='img' alt='Weather Icon' src={CloudIcon}/>
            </div>
        </div>
    );
}

export default TopSection;