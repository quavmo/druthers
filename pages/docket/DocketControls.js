import CopyToClipboard from 'react-copy-to-clipboard';
import { RaisedButton } from 'material-ui';
import { DOM, createElement as el } from 'react';
import CopyIcon from 'material-ui/svg-icons/content/content-copy';
const { span, div } = DOM;

const newBallotPath = docketID => `${window.location.host}/dockets/${docketID}/ballots/new`;

const DocketControls = ({ docket, finalizeDocket }) => {
  const submitButton = el(RaisedButton,
    {
      onClick: event => {
        event.preventDefault();
        finalizeDocket(docket);
      },
      disabled: docket.finalizing,
      label: 'Finalize and Share',
    }
  );

  const path = newBallotPath(docket.id);
  const label = 'Copy Link to Share';
  const urlCopyButton = el(CopyToClipboard, { text: path },
      el(RaisedButton, { label, secondary: true, icon: el(CopyIcon) })
  );
  const urlWidget = div({}, urlCopyButton);
  return span({}, (docket.id ? urlWidget : submitButton));
};

export default DocketControls;
