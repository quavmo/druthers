import { createElement as el } from 'react';
import { RaisedButton } from 'material-ui';

const BallotControls = ({ docketID, createBallot, order, ballotID, submitting }) => {
  if (ballotID) return null;

  return el(RaisedButton,
    {
      onClick: () => createBallot({ order, docketID }),
      label: 'Submit Ballot',
      primary: true,
      disabled: submitting,
    }
  );
};

export default BallotControls;
