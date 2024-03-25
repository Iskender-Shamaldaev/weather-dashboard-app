import React from 'react';
import CloudIcon from '../assets/cloud.png';
import RainIcon from '../assets/rain.png';

const TopSection = ({data}) => {

    const weatherIcon = data.weather && data.weather[0].main.toLowerCase().includes('rain') ? RainIcon : CloudIcon;

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
                <img className='img' alt='Weather Icon' src={weatherIcon}  style={{ width: '321px', height: '321px' }}/>
            </div>
        </div>
    );
}

export default TopSection;