import React from 'react';
import AuthorIcon from "../assets/author.png";
import Fri from "../assets/fri.png";
import Sat from "../assets/sat.png";
import Sun from "../assets/sun.png";
import Mon from "../assets/mon.png";
import Tues from "../assets/tues.png";
import Image1 from "../assets/img-1.png";
import Image2 from "../assets/img-2.png";
import Image3 from "../assets/img-3.png";
import Image4 from "../assets/img-4.png";
import dayjs from "dayjs";

const BottomSection = ({data}) => {
    return (
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

                <p className='time'>{dayjs().format('h:mmA')} GMT</p>
                <p className='air'>AIR CONDITIONS</p>

                <div className="air-item air-first">
                    <p>Real Feel</p>
                    <span>{(data.main.feels_like - 273.15).toFixed()}°</span>
                </div>
                <div className="air-item air-second">
                    <p>Wind</p>
                    <span>{data.wind.speed.toFixed()} km/hr</span>
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
    );
}

export default BottomSection;