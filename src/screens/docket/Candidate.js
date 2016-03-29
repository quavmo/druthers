import React from 'react';
import Style from '../../Style';

export default class Candidate extends React.Component {
	render() {
    return React.DOM.li(
      {style: Style.li},
      this.props.name
    );
  }
}
