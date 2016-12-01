import CopyToClipboard from 'react-copy-to-clipboard';
import { RaisedButton } from 'material-ui';
import React, { DOM, Component, createElement as el } from 'react';
const { span, a, button, input, div } = DOM;

const newBallotPath = docketID => `${window.location.host}/dockets/${docketID}/ballots/new`;

export default class Finalize extends Component {
  render() {
    const submitButton = el(RaisedButton,
      {
        onClick: this.finalizeDocket, 
        disabled: this.props.docket.finalizing,
        label: 'Finalize and Share'
      }
    );
    
    
    // const urlLink = a({newBallotPath}, "Share This Link");
    const path = newBallotPath(this.props.docket.id)
    const urlContainer = input({value: path, readOnly: true});
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
