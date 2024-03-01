import React, {useState} from "react";
import axios from "axios";
import dayjs from 'dayjs';
import CloudIcon from './assets/cloud.png';
import AuthorIcon from './assets/author.png';
import Image1 from './assets/img-1.png';
import Image2 from './assets/img-2.png';
import Image3 from './assets/img-3.png';
import Image4 from './assets/img-4.png';
import Tues from './assets/tues.png';
import Mon from './assets/mon.png';
import Sun from './assets/sun.png';
import Sat from './assets/sat.png';
import Fri from './assets/fri.png';


function App() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');
    const [error, setError] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d602a3d2609f7ac0d8dc891d54b9acdf`

    const searchLocation = async (event) => {
        if (event.key === 'Enter') {
            try {
                const response = await axios.get(url);
                setData(response.data);
                setError('');
                console.log(response.data);
            } catch (error) {
                alert('City not found. Please enter a valid city name!');
                console.error('Error fetching data:', error);
            }
            setLocation('');
        }
    }

    return (
        <div className="app">
            <div className="search">
                <input
                    value={location}
                    onChange={event => setLocation(event.target.value)}
                    onKeyPress={searchLocation}
                    placeholder='Enter Location'
                    type="text"/>
            </div>
            {error && <div className="error">{error}</div>}
            {data.name &&
                <div className="container">
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
                            {data.weather ? <img className='img' alt='Weather Icon'
                                                 src={CloudIcon}/> : null}
                        </div>
                    </div>

                    <div className="temp">
                        {data.main ? <h1 className='temp-name'>{(data.main.temp - 273.15).toFixed()}°C</h1> : null}
                        {data.main ? <span className='date'>{dayjs().format('dddd | D MMM YYYY')}</span> : null}
                    </div>

                    <div className="bottom">
                        <div className="left-side">
                            <img src={AuthorIcon} alt="author"/>
                            <span className='icon weather'>weather</span>
                            <span className='icon explore'>explore</span>
                            <span className='icon cities'>cities</span>
                            <span className='icon settings'>settings</span>
                        </div>

                        <div className="middle-side">
                            <div className="right-side-forecast2">
                                <div className="right-side-item">
                                    <div className="day1">FRI</div>
                                    <div className='arrow arrow-left'></div>
                                    <img src={Fri} alt="Friday"/>
                                </div>

                                <div className="right-side-item">
                                    <div className="day2">SAT</div>
                                    <img src={Sat} alt="Saturday"/>
                                </div>

                                <div className="right-side-item">
                                    <div className="day">SUN</div>
                                    <img src={Sun} alt="Sunday"/>
                                </div>

                                <div className="right-side-item">
                                    <div className="day2">MON</div>
                                    <img src={Mon} alt="Monday"/>
                                </div>

                                <div className="right-side-item">
                                    <div className="day1">TUES</div>
                                    <div className='arrow arrow-right'></div>
                                    <img src={Tues} alt="Tuesday"/>
                                </div>
                            </div>
                            <div className="first">
                                <span className='area'>Activities in your area</span>
                                <div className="image-cards">
                                    <div className='card'>
                                        <img src={Image1} alt="Image1"/>
                                        <p>2km away</p>
                                    </div>
                                    <div className='card'>
                                        <img src={Image2} alt="Image2"/>
                                        <p>1.5km away</p>
                                    </div>
                                    <div className='card'>
                                        <img src={Image3} alt="Image3"/>
                                        <p>3km away</p>
                                    </div>
                                    <div className='card'>
                                        <img src={Image4} alt="Image4"/>
                                        <p>500m away</p>
                                    </div>
                                </div>
                            </div>


                            <div className="second">
                                <p className='hour'>24-hour forecast</p>
                                <div className="hours">
                                    <div className="degree degree1">
                                        <h3>26°</h3>
                                        <span>11.7km/h</span>
                                        <span>Now</span>
                                    </div>
                                    <div className="degree degree2">
                                        <h3>26°</h3>
                                        <span>9.3km/h</span>
                                        <span>22:00</span>
                                    </div>
                                    <div className="degree degree3">
                                        <h3>22°</h3>
                                        <span>12km/h</span>
                                        <span>00:00</span>
                                    </div>
                                    <div className="degree degree4">
                                        <h3>16°</h3>
                                        <span>15km/h</span>
                                        <span>2:00</span>
                                    </div>
                                    <div className="degree degree5">
                                        <h3>20°</h3>
                                        <span>15km/h</span>
                                        <span>4:00</span>
                                    </div>
                                    <div className="degree degree6">
                                        <h3>22°</h3>
                                        <span>15km/h</span>
                                        <span>6:00</span>
                                    </div>
                                    <div className="degree degree7">
                                        <h3>16°</h3>
                                        <span>15km/h</span>
                                        <span>8:00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="right-side">
                            <div className="right-side-forecast">
                                <div className="right-side-item">
                                    <div className="day1">FRI</div>
                                    <div className='arrow arrow-left'></div>
                                    <img src={Fri} alt="Friday"/>
                                </div>

                                <div className="right-side-item">
                                    <div className="day2">SAT</div>
                                    <img src={Sat} alt="Saturday"/>
                                </div>

                                <div className="right-side-item">
                                    <div className="day">SUN</div>
                                    <img src={Sun} alt="Sunday"/>
                                </div>

                                <div className="right-side-item">
                                    <div className="day2">MON</div>
                                    <img src={Mon} alt="Monday"/>
                                </div>

                                <div className="right-side-item">
                                    <div className="day1">TUES</div>
                                    <div className='arrow arrow-right'></div>
                                    <img src={Tues} alt="Tuesday"/>
                                </div>
                            </div>

                            {data.main ? <p className='time'>{dayjs().format('h:mmA')} GMT</p> : null}
                            <p className='air'>AIR CONDITIONS</p>

                            <div className="air-item air-first">
                                <p>Real Feel</p>
                                {data.main ? <span>{(data.main.feels_like - 273.15).toFixed()}°</span> : null}
                            </div>
                            <div className="air-item air-second">
                                <p>Wind</p>
                                {data.wind ? <span>{data.wind.speed.toFixed()} km/hr</span> : null}
                            </div>
                            <div className="air-item air-third">
                                <p>Chance of rain</p>
                                <span>2%</span>
                            </div>
                            <div className="air-item air-fourth">
                                <p>UV Index</p>
                                <span>4</span>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default App;
