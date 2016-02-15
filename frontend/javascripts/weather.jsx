var React = require('react');

var Weather = React.createClass({
  getInitialState: function() {
    return(
      {weather: "Loading..."}
    );
  },

  componentDidMount: function() {
    navigator.geolocation.getCurrentPosition(this.pollWeather);
  },


  pollWeather: function (location) {
    var lat = location.coords.latitude;
    var long = location.coords.longitude;
    var url = "http://api.openweathermap.org/data/2.5/weather?";
    url += "lat=" + lat.toString() + "&lon=" + long.toString();
    url += "&APPID=645c5d39c7603f17e23fcaffcea1a3c1";

    var xmlhttp = new XMLHttpRequest();
    var that = this;
    xmlhttp.onreadystatechange = function () {
      //ready state of Done means this is complete
      if (xmlhttp.status == 200 && xmlhttp.readyState == XMLHttpRequest.DONE) {

        var data = JSON.parse(xmlhttp.responseText);
        that.setState({ weather: data });
      }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  },

  render: function () {
    if (this.state.weather === "Loading...") {
      return <p>Loading ...</p>;
    } else {
      var realTemp = (this.state.weather.main.temp - 273.15) * 1.8 + 32;
      return(
        <div className="weather-container">
          <article>{this.state.weather.weather[0].description}</article>
          <article>{Math.floor(realTemp)} ºF</article>
        </div>
      );
    }
  }
});

module.exports = Weather;
