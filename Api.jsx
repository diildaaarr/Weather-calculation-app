const baseUrl="https://api.weatherapi.com/v1/current.json?key=d3e00a6ac5c747f8a6b131025251806";
export const getWeatherDataForCity=async (city)=>{
    const response = await fetch(`${baseUrl}&q=${city}&aqi=yes`);

    return response.json();
}


export const getWeatherDataForLocation=async (lat,lon)=>{
    const response = await fetch(`${baseUrl}&q=${lat},${lon}&aqi=yes`);

    return response.json();
}