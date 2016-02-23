import React 				from 'react';

export default React.createClass({
	render: function() {
    let style = {
      color: 'white',
      fontSize: 28,
      textAlign: 'center'
    };

    return React.DOM.div(
      {style: style},
      this.props.text
    );
  }
});
