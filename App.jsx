import React, { useEffect, useState } from 'react';
import "./style.css";

const App3=()=>{

    const [city, setCity]=useState(null);
    const [search,setSearch]=useState("Mumbai");
    const [icon,setIcon]=useState();
    const [weather,setWeather]=useState();

    useEffect( ()=>{
        const fetchApi=async()=>{
            const url=  `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4f59b230a27a8c7c2b2ba2e5ede69c8f`; 
            const response=await fetch(url);

            const resJson= await response.json();
            console.log(resJson);

         
            setCity(resJson.main)
            if(resJson.main)
            {
            setIcon(resJson.weather[0].icon);
            setWeather(resJson.weather[0].description)
            }
        }
        fetchApi();
    },[search])
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" className="inputField" value={search} onChange={(event)=>{
                        setSearch(event.target.value)
                    }}/>
                </div>

                {
                    !city ? (
                        <p className="errorMsg"> No Data Found</p>
                    ): ( <div>
                        <div className="info">
                    <h2 className="location"> {search} </h2>
                   <h2> <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} className="fa" /> </h2>
                   
                    <br></br><br></br>
                    <h3> {weather}</h3>
                    <h1 className="temp"> {city.temp} °Cel </h1>
                    <h3 className="tempmin_max"> Min : {city.temp_min} °Cel  | Max : {city.temp_max} °Cel </h3>
                </div>

                <div className="wave one"></div>
                <div className="wave two"></div>
                <div className="wave three"></div>
                </div>
                    )
                }
              
            </div>
        </>

    )
}

export default App3;
