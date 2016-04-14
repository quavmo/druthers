import React from 'react';

export default class Ballot extends React.Component {
  render() {
		let title = React.DOM.h1({}, this.props.ballot.title);
    return React.DOM.div({}, title);
  }
}
