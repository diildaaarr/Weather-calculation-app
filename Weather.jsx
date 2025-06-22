import { createContext, useContext, useState } from "react"
import { getWeatherDataForCity, getWeatherDataForLocation } from "./Api"

const weatherContext=createContext(null)

export const useWeather=()=>{
    return useContext(weatherContext);
}

export const WeatherProvider=(props)=>{
    const [data,setData]=useState(null);
    const [searchCity,setSearchCity]=useState("");
    
    const fetchData=async ()=>{
      if (!searchCity) return;
      const response=await getWeatherDataForCity(searchCity);
      setData(response)  //data varibale me response ko set kar dia
    }

    const fetchCurrentLocation=()=>{
        navigator.geolocation.getCurrentPosition(async (position)=>{
            const data = await getWeatherDataForLocation(
                position.coords.latitude,
                position.coords.longitude
            );
            setData(data);
        });
    }
    // pass this func to value so that we can use it in the useWeather()






    return (
        <weatherContext.Provider value={{data,searchCity,setSearchCity,fetchData,fetchCurrentLocation}} >
            {props.children}
        </weatherContext.Provider>
    )
}