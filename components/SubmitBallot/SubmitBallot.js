import { 
  DOM
} from 'react';
const { a, button } = DOM;

export default function SubmitBallot({docketID, createBallot, order, ballotID}) {
  const docketResultsPath = `/dockets/${docketID}/results`;
  const submitButton = button(
    {
      onClick: () => createBallot({order, docketID})
    },
    "Submit Ballot"
  );
  
  const linkToResults = a({
    href: docketResultsPath, style: {fontSize: "24"}
  }, "View Results");
  
  return ballotID ? linkToResults : submitButton;
};