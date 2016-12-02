import { createElement as el } from 'react';
import { RaisedButton } from 'material-ui';

const BallotControls = ({docketID, createBallot, order, ballotID, submitting}) => {
  const docketResultsPath = `/dockets/${docketID}/results`;
  const submitButton = el(RaisedButton, 
    {
      onClick: () => createBallot({order, docketID}),
      label: "Submit Ballot",
      primary: true,
      disabled: submitting
    }
  );
  
  const linkToResults = el('a', {
    href: docketResultsPath, style: {fontSize: "24"}
  }, "View Results");
  
  return ballotID ? null : submitButton;
};

export default BallotControls;