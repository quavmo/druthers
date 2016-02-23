import React 				from 'react';
import Candidate 	  from './Candidate';

export default React.createClass({
	render: function() {
    let style = {
      color: 'white',
      fontSize: 28,
      textAlign: 'center'
    };

    let candidates = this.props.candidates.map(function (name) {
      return React.createElement(Candidate, {name});
    });

    return React.DOM.ol({style: style}, ...candidates);
  }
});
