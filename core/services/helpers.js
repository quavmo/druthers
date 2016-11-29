import { Election, condorcet } from 'caritat';
import { map, reduce, prop, values, addIndex } from 'ramda';

export const byOrder = (order=[]) => (a, b) => 
  order.indexOf(a.name) - order.indexOf(b.name);

export const countBallot = (election, ballot) =>
  { return election.addBallot(ballot, 1) && election; }

export const elect = (nestedBallots, nestedCandidates) => {
  const ballots = map(prop('order'), values(nestedBallots));
  const candidates = map(prop('name'), nestedCandidates);
  const election = reduce(countBallot, new Election({candidates}), ballots)
  return condorcet.schulze(election);
}

export const indexedMap = addIndex(map);