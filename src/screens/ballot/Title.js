import React from 'react';

export default class Title extends React.Component {
	constructor(){
		super(...arguments);
		this.state = {};
	}
	render() {
    return React.DOM.textarea({
			ref: 'input',
			style: this.style(this.state.highlighted),
			value: this.props.text,
			onChange: this.updateText.bind(this),
			onFocus: this.highlight.bind(this),
			onBlur: this.lowlight.bind(this)
		});
  }

	updateText(e) {
		this.props.titleRef.set(e.target.value);
	}

	highlight() { this.setState({highlighted: true}) }
	lowlight() { this.setState({highlighted: false}) }
	style(highlighted) {
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
}
