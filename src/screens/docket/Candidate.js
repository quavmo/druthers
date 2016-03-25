import React from 'react';

export default class Candidate extends React.Component {
	render() {
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
}
