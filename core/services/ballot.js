import DataService from './DataService';
import R from 'ramda';
const peek = R.tap(console.log);
export function createBallot(id) { return getDocket(id).then(generateBallot) };

export function getDocket(id) { return DataService.child('dockets').child(id).once('value'); };

export function generateBallot(snapshot) {
  const ballot = Object.keys(snapshot.child('candidates').val());
  return snapshot.ref().child('ballots').push(ballot);
};

export function candidateSort (candidates, order) {
  const byOrder = function (a,b) {
    return R.indexOf(a.key, order) - R.indexOf(b.key, order)
  }
  return R.sort(byOrder, candidates);
};

export function keyedObjArray(snapshot) { 
  return R.compose(R.map(R.zipObj(['key', 'datom'])), R.toPairs)(snapshot) 
};

export function newOrder (list, source, destination) {
  return R.insert(destination, list[source], R.remove(source, 1, list))
}

export function condorcet(basket) {
  return sortedKeysByValue(winFrequencies(R.unnest(R.map(pairContests, R.values(basket)))));
}
export function winFrequencies(contests) {
  return R.countBy(R.prop(0), contests);
}

function sortedKeysByValue(obj) {
  return R.reverse(R.map(R.prop(0), R.sortBy(R.prop(1), R.toPairs(obj))))
}

export function pairContests(ballot) {
  // All combinations of two
  var pairs = [];
  for (var i = 0; i < ballot.length - 1; i++) {
    for (var j = i + 1; j < ballot.length; j++) {
      pairs.push([ballot[i], ballot[j]])
    }
  }
  // R.times(f, ballot.length - 1)
  return pairs;
}


// In the days when Sussman was a novice, Minsky once came to him as he sat hacking at the PDP-6.
// "What are you doing?", asked Minsky.
// "I am training a randomly wired neural net to play Tic-tac-toe", Sussman replied.
// "Why is the net wired randomly?", asked Minsky.
// "I do not want it to have any preconceptions of how to play", Sussman said.
// Minsky then shut his eyes.
// "Why do you close your eyes?" Sussman asked his teacher.
// "So that the room will be empty."
// At that moment, Sussman was enlightened.