import React 				from 'react';

export default class ErrorScreen extends React.Component {
	render() {
    return React.DOM.div({}, `Whoops: ${this.props.error}`);
  }
}
