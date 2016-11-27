import { pick } from 'ramda';
import { connect } from 'react-redux';
import { Component, DOM, createElement as el } from 'react';
const { div } = DOM;
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
    return el(Layout, {className},
      el(Title, { text: title }),
      el(ResultSet, { members, ballots })
    );
  }
}

export default connect(pick(['currentDocket']), mapDispatchToProps)(LeaderBoard)