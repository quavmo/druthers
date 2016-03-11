import React from 'react';

export default React.createClass({
	getInitialState: () => new Object,
	render: function() {
    return React.DOM.textarea({
			ref: 'input',
			style: this.style(this.state.highlighted),
			value: this.props.text,
			onChange: this.updateText,
			onFocus: this.highlight,
			onBlur: this.lowlight
		});
  },
	updateText: function(e) {
		this.props.titleRef.set(e.target.value);
	},
	highlight: function() { this.setState({highlighted: true}) },
	lowlight: function() { this.setState({highlighted: false}) },
	style: highlighted => {
		return {
			border: 'none',
	    outline: 'none',
	    backgroundColor: highlighted ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)',
	    fontFamily: 'inherit',
	    fontSize: 28,
			color: 'white',
			width: "100%",
			textAlign: 'center'
		};
	}
});
