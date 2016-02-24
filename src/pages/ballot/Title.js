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
			value: this.props.text
		});
  }
});
