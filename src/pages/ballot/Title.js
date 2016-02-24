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
    return React.DOM.input({
			style: this.style,
			value: this.state.text,
			onChange: this.updateText
		});
  },
	updateText: function(e) {
		this.titleBase.set(e.target.value);
	},
	get style () {
		return {
			border: 'none',
	    outline: 'none',
	    backgroundColor: 'transparent',
	    fontFamily: 'inherit',
	    fontSize: 28,
			color: 'white',
			width: "100%",
			textAlign: 'center'
    };
	}
});
