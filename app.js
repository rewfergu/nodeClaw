var React = require('react');
var ReactDOM = require('react-dom');
var io = require('socket.io-client');

// I could just add this manually, styles are pretty simple
//var Styles = require('./scss/style.scss');

var App = React.createClass({
  getInitialState() {
    return {
      slider: 0
    }
  },
  componentWillMount() {
    // this.socket = io('http://localhost:3000');
    this.socket = io('http://696ead4c.ngrok.io');
  },
  handleSliderChange(e) {
    this.setState({
      slider: e.target.value
    });
    this.socket.emit('sliderChange', this.state.slider);
  },
  render() {
    return (
      <section>
      <div className="display">{this.state.slider}</div>
      <input type="range" min="0" max="180" value={this.state.slider} onChange={this.handleSliderChange} />
      </section>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
