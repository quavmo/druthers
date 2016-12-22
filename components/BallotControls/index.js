import { createElement as el } from 'react';
import { FloatingActionButton } from 'material-ui';
import SaveIcon from 'material-ui/svg-icons/content/send';
import { fab } from './style.css'

const BallotControls = ({ docketID, createBallot, order, ballotID, submitting }) => {
  if (ballotID) return null;

  return el(FloatingActionButton,
    {
      onTouchTap: () => createBallot({ order, docketID }),
      label: 'Submit Ballot',
      disabled: submitting,
      className: fab,
    }, el(SaveIcon)
  );
};

export default BallotControls;
