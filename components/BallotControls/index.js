import { createElement as el } from 'react';
import { FloatingActionButton, Snackbar } from 'material-ui';
import SaveIcon from 'material-ui/svg-icons/content/send';
import { fab } from './style.css'

const CreateBallotButton = ({order, docketID, submitting, createBallot}) =>
el(FloatingActionButton,
  {
    onTouchTap: () => createBallot({ order, docketID }),
    label: 'Submit Ballot',
    disabled: submitting,
    className: fab,
  }, el(SaveIcon)
);

const message = "Ballot Submitted!"

const BallotControls = ({ docketID, createBallot, order, ballotID, submitting }) => {
  return el('div', {},
    !ballotID ? el(CreateBallotButton, { order, docketID, submitting, createBallot }) : null,
    el(Snackbar, {open: !!ballotID, autoHideDuration: 4000, message})
  );
};

export default BallotControls;