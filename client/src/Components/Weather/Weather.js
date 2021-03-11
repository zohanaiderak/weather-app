import React from 'react';

const Weather = (props) => {
        console.log(props.weather)
const hello = () => {
    if(props.weather.applicable_date !== undefined){
        return(
            <>
                <h3>Date: {props.weather.applicable_date}</h3>
                <h3>Weather Forecast: {props.weather.weather_state_name}</h3>
                <h3>Maximum Temperature :{props.weather.max_temp}</h3>
                <h3>Minimum Temperature :{props.weather.min_temp}</h3>
            </>
        )}
      else{
          return (
            <p>Enter a Location Name</p>
            );
      }
}
return(
    <>
    <div>
        {hello()}
    </div>
    </>
)

}

export default Weather;