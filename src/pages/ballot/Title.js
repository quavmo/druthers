import React 				from 'react';

export default React.createClass({
	render: function() {
    let style = {
			border: 'none',
	    outline: 'none',
	    backgroundColor: 'transparent',
	    fontFamily: 'inherit',
	    fontSize: 28,
			color: 'white',
			width: "100%",
			textAlign: 'center'
    };

    return React.DOM.input({
			style: style,
			value: this.props.text,
			onChange: this.updateText
		});
  },
	updateText: function(e) {
		let ballotBase = new Firebase(`https://druthers-base.firebaseio.com/ballots/1`);
		ballotBase.update({title: e.target.value});
	}
});
