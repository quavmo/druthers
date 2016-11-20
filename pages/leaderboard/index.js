import { pick, map, prop, toPairs } from 'ramda';
import { connect } from 'react-redux';
import { Component, DOM, createElement as el } from 'react';
const { div } = DOM;
import { condorcet } from '../../core/services/ballot';
import * as mapDispatchToProps from '../../core/actions';
import CandidateSet from '../../components/CandidateSet';
import Title from '../../components/Title';
import { leaderBoard as className } from './style.css';

const sortByCondorcet = ballots => {
  if (!toPairs(ballots)[0]) return [];
  
  return toPairs(ballots)[0][1].order;
}

class LeaderBoard extends Component {
  constructor(props) {
    super(props);
    props.fetchDocket(props.route.params.docketID)
  }
  
  render() {
    const { ballots, members, title } = this.props.currentDocket;
    const order = sortByCondorcet(ballots);
    console.log(className)
    return div({className},
      el(Title, {text: title}),
      el(CandidateSet, { members, order })
    );
  }
}

export default connect(pick(['currentDocket']), mapDispatchToProps)(LeaderBoard)