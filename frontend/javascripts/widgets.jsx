var React = require('react'),
    ReactDOM = require('react-dom'),
    WeatherClock = require('./weather-clock');

var MyComponent = React.createClass({
  render: function () {
    return (
      <a href="https://www.youtube.com/watch?v=h1zGqRXZlnY">Swiggity swooty</a>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<MyComponent/>, document.getElementById('swiggity_swooty'));
  ReactDOM.render(
    <WeatherClock/>,
    document.getElementById('main')
  );
});
