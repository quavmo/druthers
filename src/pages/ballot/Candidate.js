import React 				from 'react';

export default React.createClass({
	render: function() {
    let style = {
      color: 'black',
      fontSize: 18,
      background: 'white',
      padding: 20,
      margin: 20,
      listStyle: 'none'
    };

    return React.DOM.li(
      {style: style},
      this.props.name
    );
  }
});
