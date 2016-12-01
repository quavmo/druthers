import { pick } from 'ramda';
import { connect } from 'react-redux';
import { Component, DOM, createElement as el } from 'react';
const { h2 } = DOM;
import * as mapDispatchToProps from '../../core/actions';
import LeaderBoard from '../../components/LeaderBoard';
import Layout from '../../components/Layout'
import Title from '../../components/Title';
import { docketBase } from '../../core/services/DataService';


class ResultsPage extends Component {
  constructor(props) {
    super(props);
    docketBase.child(props.route.params.docketID).on('value', props.docketFetchSucceeded)
    console.log("============================")
  }
  
  render() {
    const { ballots, members, title } = this.props.currentDocket;
    console.log("============================")
    console.log(ballots, members)
    return el(Layout, {},
      h2({}, title),
      el(LeaderBoard, { members, ballots })
    );
  }
}

export default connect(pick(['currentDocket']), mapDispatchToProps)(ResultsPage)