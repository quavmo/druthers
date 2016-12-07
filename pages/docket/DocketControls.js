import CopyToClipboard from 'react-copy-to-clipboard';
import { RaisedButton, TextField } from 'material-ui';
import React, { DOM, Component, createElement as el } from 'react';
import CopyIcon from 'material-ui/svg-icons/content/content-copy'
const { span, a, button, input, div } = DOM;

const newBallotPath = docketID => `${window.location.host}/dockets/${docketID}/ballots/new`;

export default class DocketControls extends Component {
  render() {
    const submitButton = el(RaisedButton,
      {
        onClick: this.finalizeDocket, 
        disabled: this.props.docket.finalizing,
        label: 'Finalize and Share'
      }
    );
    
    const path = newBallotPath(this.props.docket.id)
    const label = "Copy Link to Share";
    const urlCopyButton = el(CopyToClipboard, {text: path},
        el(RaisedButton, { label, secondary: true, icon: el(CopyIcon) } )
    )
    const urlWidget = div({}, urlCopyButton)
    return span({}, (this.props.docket.id ? urlWidget : submitButton));
  }
  
  finalizeDocket = event => {
    event.preventDefault();
    this.props.finalizeDocket(this.props.docket);
  }
}
