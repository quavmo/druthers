import CopyToClipboard from 'react-copy-to-clipboard';
import { FloatingActionButton, Snackbar } from 'material-ui';
import { DOM, createElement as el } from 'react';
import { isEmpty } from 'ramda';
import CopyIcon from 'material-ui/svg-icons/content/content-copy';
import SaveIcon from 'material-ui/svg-icons/file/cloud-done';
const { span, div } = DOM;
import { fab } from './style.css'

const newBallotPath = docketID => `${window.location.host}/dockets/${docketID}/ballots/new`;

const SubmitButton = ({finalizeDocket, docket}) =>
el(FloatingActionButton,
  {
    className: fab,
    onTouchTap: () => finalizeDocket(docket),
    disabled: docket.finalizing || !docket.title || docket.members.length < 2,
    label: 'Finalize',
  }, el(SaveIcon)
);

const CopyButton = ({text, onTouchTap}) => 
el(CopyToClipboard, { text },
  el(FloatingActionButton, { 
    className: fab,
    secondary: true,
    onTouchTap
  }, el(CopyIcon))
);


const DocketControls = ({ docket, finalizeDocket, flagUrlCopied, urlCopied }) => {
  const copy = el(CopyButton, { text: newBallotPath(docket.id), onTouchTap: flagUrlCopied });
  const submit = el(SubmitButton, { finalizeDocket, docket });
  const message = urlCopied ?
    "URL copied: paste it into chat, email, etc!" : 
    "Docket Created!"
  
  return el('div', {}, 
    docket.id ? copy : submit,
    el(Snackbar, { open: !!docket.id, message, autoHideDuration: 3000 })
  );
};

export default DocketControls;
