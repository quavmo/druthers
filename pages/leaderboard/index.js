import { flatten, pick, values, prop, map, reduce } from 'ramda';
import { connect } from 'react-redux';
import { Component, DOM, createElement as el } from 'react';
const { div } = DOM;
import * as mapDispatchToProps from '../../core/actions';
import CandidateSet from '../../components/CandidateSet';
import Title from '../../components/Title';
import { leaderBoard as className } from './style.css';
import { Election, irv, plurality, condorcet } from 'caritat';
import { docketBase } from '../../core/services/DataService';

const countBallot = (election, ballot) => { return election.addBallot(ballot, 1) && election; }

const elect = (nestedBallots, nestedCandidates) => {
  const ballots = map(prop('order'), values(nestedBallots));
  const candidates = map(prop('name'), nestedCandidates);
  const election = reduce(countBallot, new Election({candidates}), ballots)
  return condorcet.schulze(election);
}

class LeaderBoard extends Component {
  constructor(props) {
    super(props);
    docketBase.child(props.route.params.docketID).on('value', props.docketFetchSucceeded)
  }
  
  render() {
    const { ballots, members, title } = this.props.currentDocket;
    return div({className},
      el(Title, { text: title }),
      el(CandidateSet, { members, order: elect(ballots, members) })
    );
  }
}

export default connect(pick(['currentDocket']), mapDispatchToProps)(LeaderBoard)