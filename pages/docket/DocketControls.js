import CopyToClipboard from 'react-copy-to-clipboard';
import { FloatingActionButton } from 'material-ui';
import { DOM, createElement as el } from 'react';
import { isEmpty } from 'ramda';
import CopyIcon from 'material-ui/svg-icons/content/content-copy';
import SaveIcon from 'material-ui/svg-icons/file/cloud-done';
const { span, div } = DOM;
import { fab } from './style.css'

const newBallotPath = docketID => `${window.location.host}/dockets/${docketID}/ballots/new`;

const SubmitButton = ({finalizeDocket, docket}) => el(FloatingActionButton,
  {
    className: fab,
    onTouchTap: () => finalizeDocket(docket),
    disabled: docket.finalizing || !docket.title || docket.members.length < 2,
    label: 'Finalize',
  }, el(SaveIcon)
);

const CopyButton = ({text}) => 
el(CopyToClipboard, { text },
  el(FloatingActionButton, { 
    className: fab,
    secondary: true
  }, el(CopyIcon))
);

const DocketControls = ({ docket, finalizeDocket }) => {
  return docket.id ?
    el(CopyButton, {text: newBallotPath(docket.id)}) :
    el(SubmitButton, { finalizeDocket, docket });
};

export default DocketControls;
