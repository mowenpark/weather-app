var React = require('react'),
    Clock = require('./clock'),
    Weather = require('./weather');

var WeatherClock = React.createClass({
  render: function () {
    return(
      <div className="wc-container">
        <Clock className="clock"/>
        <Weather className="weather-container"/>
      </div>
    );
  }

});

module.exports = WeatherClock;
