var React = require('react');

var Clock = React.createClass({
  getInitialState: function() {
    return {time: new Date ()};
  },

  tick: function(){
    var d = this.state.time;
    d.setSeconds(d.getSeconds() + 1);
    this.setState({time: d});
  },

  componentDidMount: function () {
    setInterval(this.tick, 1000);
  },

  render: function () {
    return <article>{this.state.time.toTimeString().slice(0,8)}</article>;
  }
});

module.exports = Clock;
