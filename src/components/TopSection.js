import React from 'react';
import CloudIcon from '../assets/cloud.png';

const TopSection = ({data}) => {
    return (
        <div className="top">
            <div className="location">
                <div>
                    {data.weather ? <p className='name'>{data.name}</p> : null}
                </div>

                <div className="description1">
                    {data.weather ? <p className='cloud'>{data.weather[0].main}</p> : null}
                </div>
            </div>
            <div className="description">
                {data.weather ? <img className='img' alt='Weather Icon' src={CloudIcon}/> : null}
            </div>
        </div>
    );
}

export default TopSection;