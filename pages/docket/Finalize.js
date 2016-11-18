import React, { DOM, Component } from 'react';
const { span, button, input } = DOM;
import { callToAction as className } from '../styles.css';

const host = 'http://localhost:3000';

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
    
    const urlField = input({
      readOnly: true,
      value: `${host}/dockets/${this.props.docket.id}/ballots/new`
    });

    return span({}, (this.props.docket.id ? urlField : submitButton));
  }
  
  finalizeDocket = event => {
    event.preventDefault();
    this.props.finalizeDocket(this.props.docket);
  }
}
