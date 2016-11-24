import CopyToClipboard from 'react-copy-to-clipboard';
import React, { DOM, Component, createElement as el } from 'react';
const { span, a, button, input, div } = DOM;
import {
  callToAction as className
} from '../styles.css';

const newBallotPath = docketID => `${window.location.host}/dockets/${docketID}/ballots/new`;

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
    
    
    // const urlLink = a({newBallotPath}, "Share This Link");
    const path = newBallotPath(this.props.docket.id)
    const urlContainer = input({value: path});
    const urlCopyButton = el(CopyToClipboard, {text: path},
        button({}, "Copy Link to Share")
    )
    const urlWidget = div({}, urlContainer, urlCopyButton)
    return span({}, (this.props.docket.id ? urlWidget : submitButton));
  }
  
  finalizeDocket = event => {
    event.preventDefault();
    this.props.finalizeDocket(this.props.docket);
  }
}
