import React 				from 'react';

export default React.createClass({
	getInitialState: function(){
		return { text: 'loading...' }
	},
	componentDidMount: function () {
		this.titleBase = new Firebase(`https://druthers-base.firebaseio.com/ballots/${this.props.ballotId}/title`);
		this.titleBase.on('value', function (data) { this.setState({text: data.val()}) }, this);
	},
	render: function() {
		let style = {
			border: 'none',
	    outline: 'none',
	    backgroundColor: this.state.highlighted ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)',
	    fontFamily: 'inherit',
	    fontSize: 28,
			color: 'white',
			width: "100%",
			textAlign: 'center'
		};
    return React.DOM.textarea({
			style: style,
			value: this.state.text,
			onChange: this.updateText,
			onFocus: this.highlight,
			onBlur: this.lowlight
		});
  },
	updateText: function(e) { this.titleBase.set(e.target.value); },
	highlight: function() { this.setState({highlighted: true}) },
	lowlight: function() { this.setState({highlighted: false}) },
});
