import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    location: ''
  }

  userInput = (e) => {
    e.preventDefault();
    let input = document.getElementById('searchInput').value;
    axios(`https://www.metaweather.com/api/location/search/?query=${input}`,
    {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
    })
    .then(res => {
      this.setState({location: res.data})
      console.log(res.data)
    })
    .catch(err => alert(err))
    console.log(this.state.location)
  }

  output = () => {
    return console.log(this.state.location);
  }
  render(){
  return (
    <div className="App">
      <input id="searchInput"></input>
      <button onClick={this.userInput}>Search</button>
      <h2>{this.output}</h2>
    </div>
  );
  }
}

export default App;
