import { 
  DOM
} from 'react';
const { a, button } = DOM;

import { callToAction } from '../../pages/styles.css';

export default function SubmitBallot({docketID, createBallot, order, ballotID}) {
  const docketResultsPath = `/dockets/${docketID}/results`;
  const submitButton = button(
    {
      className: callToAction,
      onClick: () => createBallot({order, docketID})
    },
    "Submit Ballot"
  );
  
  const linkToResults = a({href: docketResultsPath}, "Results");
  return ballotID ? linkToResults : submitButton;
};