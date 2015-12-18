import React 				from 'react';

export default React.createClass({
	render: function() {
    return React.DOM.div({}, `Whoops: ${this.props.error}`);
  }
});
