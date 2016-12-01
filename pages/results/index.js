import { pick } from 'ramda';
import { connect } from 'react-redux';
import { Component, DOM, createElement as el } from 'react';
const { h2, div } = DOM;
import * as mapDispatchToProps from '../../core/actions';
import LeaderBoard from '../../components/LeaderBoard';
import Layout from '../../components/Layout'
import Title from '../../components/Title';
import { docketBase } from '../../core/services/DataService';
import num from 'numeral';
import { ballotCount } from './style.css';

class ResultsPage extends Component {
  constructor(props) {
    super(props);
    docketBase.child(props.route.params.docketID).on('value', props.docketFetchSucceeded);
  }
  
  render() {
    const { ballots, members, title } = this.props.currentDocket;

    const countString = ballots => {
      const count = Object.keys(ballots).length;
      const humanCount = num(count).format('0,0');
      const noun = count == 1 ? 'ballot' : 'ballots';
      return `( ${humanCount} ${noun} )`;
    }
     
    return el(Layout, {},
      h2({}, title),
      div({className: ballotCount}, countString(ballots)),
      el(LeaderBoard, { members, ballots })
    );
  }
}

export default connect(pick(['currentDocket']), mapDispatchToProps)(ResultsPage)