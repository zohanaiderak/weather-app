import React from 'react';
import './App.css';
import axios from 'axios';
import Weather from './Components/Weather/Weather';

class App extends React.Component {
  state = {
    location : [],
    weather : []
  }

  userInput = (e) => {
    e.preventDefault();
    let input = document.getElementById('searchInput').value;
    axios.get(`http://localhost:8080/api/location/search/?query=${input}`)
    .then(res => {
      this.setState({location: res.data[0]})
      axios.get(`http://localhost:8080/api/location/${res.data[0].woeid}/`)
      .then(res => {
      this.setState({weather: res.data.consolidated_weather[0]})
      })
      .catch(err => console.log(err))
    })
    .catch(err => console.log(err));
  }
     
  
  render(){
  return (
    <div className="App">
      <input id="searchInput"></input>
      <button onClick={this.userInput}>Search</button>
      <h1>{this.state.location.title}</h1>
      <Weather weather={this.state.weather}></Weather>
    </div>
  );
  }
}


export default App;
