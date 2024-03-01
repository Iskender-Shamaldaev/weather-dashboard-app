import React, {useState} from "react";
import axios from "axios";
import dayjs from 'dayjs';
import TopSection from "./components/TopSection";
import BottomSection from "./components/BottomSection";
import Search from "./components/Search";


const App = () => {
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
            <Search
                location={location}
                setLocation={setLocation}
                searchLocation={searchLocation}
            />

            {error && <div className="error">{error}</div>}

            {data.name &&
                <div className="container">
                    <TopSection data={data}/>

                    <div className="temp">
                        <h1 className='temp-name'>{(data.main.temp - 273.15).toFixed()}°C</h1>
                        <span className='date'>{dayjs().format('dddd | D MMM YYYY')}</span>
                    </div>

                    <BottomSection data={data}/>
                </div>
            }
        </div>
    );
}

export default App;
