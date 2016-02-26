import React from 'react';
let blue = 'rgba(0,84,255,1)';

export default React.createClass({
  getInitialState() {
    return {
      message: this.props.alpha ? 'Create a ballot!' : "Get notified when it's released."
    }
  },
	render() {
    return React.DOM.a(
      {href: '#signUp', style: this.style, onClick: this.handleClick},
      this.state.message
    );
	},
  handleClick(e) {
    this.props.alpha && e.preventDefault();
  },
  get style() {
    return {
      color: 'white',
      textDecoration: 'none',
      marginTop: 30,
      padding: 20,
      display: 'inline-block',
      background: blue,
      textTransform: 'capitalize'
    };
  }
});
