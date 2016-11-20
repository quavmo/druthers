import React, { DOM, Component } from 'react';
const { span, a, button, input } = DOM;
import { callToAction as className } from '../styles.css';

const host = 'http://24878a7d.ngrok.io';

export default class Finalize extends Component {
  render() {
    const submitButton = button(
      {
        className,
        onClick: this.finalizeDocket, 
        disabled: this.props.docket.finalizing
      },
      'Finalize'
    );
    
    const href = `${host}/dockets/${this.props.docket.id}/ballots/new`;
    const urlLink = a({ href }, href);
    
    return span({}, (this.props.docket.id ? urlLink : submitButton));
  }
  
  finalizeDocket = event => {
    event.preventDefault();
    this.props.finalizeDocket(this.props.docket);
  }
}
