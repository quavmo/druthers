import React from 'react';
import Style from '../../Style';
import R from 'ramda';

export default class Candidate extends React.Component {
	constructor() {
		super(...arguments);
	}

  render(){
    let button = React.DOM.a(
    	{style: Style.button, onClick: this.finalizeDocket.bind(this)},
    	this.props.final ? 'Share' : 'Finalize'
    );

    let urlField = React.DOM.input(
      {readOnly: true, value: window.location.toString()}
    );

    let contents = R.reject(R.isNil)([(this.props.final && urlField), button])
    return React.DOM.span({}, ...contents);
  }

  finalizeDocket(event) {
		event.preventDefault();

    this.props.docketBase.child('final').set(true);
  }
}
