import React from 'react';
import s from '../styles.css';
import R from 'ramda';

export default class Finalize extends React.Component {
	constructor() { super(...arguments); }

  render(){
    let contents = this.props.final ? [this.urlField, this.button] : [this.button]
    return React.DOM.span({}, ...contents);
  }
  
  finalizeDocket(event) {
		event.preventDefault();
    this.props.docketBase.child('final').set(true);
  }
  
  get button() {
    return React.DOM.a(
    	{className: s.callToAction, onClick: this.finalizeDocket.bind(this)},
    	this.props.final ? 'Share' : 'Finalize'
    );
  }  
  
  get urlField() {
    let url = `http://localhost:8080/#/dockets/${this.props.docketID}/ballots/new`;
    return url;
    // return React.DOM.input(
    //   {readOnly: true, value: url}
    // );
  }
}
