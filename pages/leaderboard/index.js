import { pick } from 'ramda';
import { connect } from 'react-redux';
import { Component, DOM, createElement as el } from 'react';
const { h2 } = DOM;
import * as mapDispatchToProps from '../../core/actions';
import ResultSet from '../../components/ResultSet';
import Layout from '../../components/Layout'
import Title from '../../components/Title';
import { leaderBoard as className } from './style.css';
import { docketBase } from '../../core/services/DataService';


class LeaderBoard extends Component {
  constructor(props) {
    super(props);
    docketBase.child(props.route.params.docketID).on('value', props.docketFetchSucceeded)
  }
  
  render() {
    const { ballots, members, title } = this.props.currentDocket;
    return el(Layout, {},
      h2({}, title),
      el(ResultSet, { members, ballots })
    );
  }
}

export default connect(pick(['currentDocket']), mapDispatchToProps)(LeaderBoard)