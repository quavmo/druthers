import { Election, condorcet } from 'caritat';
import { 
  insert, map, reduce, prop, values, addIndex, remove
} from 'ramda';
const { random } = Math;

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

export const coinToss = (a, b) => random() < 0.5 ? -1 : 1;

export const swap = (srcIndex, destIndex, list) => insert(
  destIndex,
  list[srcIndex],
  remove(srcIndex, 1, list)
)

export const p = arg => console.log(arg) && arg;