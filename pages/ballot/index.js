import { connect } from 'react-redux';
import * as mapDispatchToProps from '../../core/actions';
import React, { 
  Component,
  createElement as el,
  DOM
} from 'react';
const { h2 } = DOM;
import Title from '../../components/Title';
import Layout from '../../components/Layout';
import CandidateSet from '../../components/CandidateSet';
import BallotControls from '../../components/BallotControls';
import { ballot as className } from './style.css';

const pageLabel = 'Ballot';
class BallotPage extends Component {
  constructor(props) {
    super(props);
    props.fetchDocket(props.route.params.docketID)
  }
  
  render() { 
    const { 
      moveCandidate,
      currentBallot,
      currentDocket,
      createBallot,
      navigateToPage
    } = this.props;
    
    const { id:docketID, title, members } = currentDocket;
    const { id:ballotID, order, submitting } = currentBallot;
    
    return el(Layout, { className, pageLabel, navigateToPage, docketID },
      h2({}, title),
      el(CandidateSet, { members, order, moveCandidate }),
      el(BallotControls, { ballotID, docketID, createBallot, order, submitting })
    );
  }
    
  updateTitle(snapshot) { this.setState({title: snapshot.val()}); }
  updateCandidates(snapshot) { this.setState({candidates: snapshot.val()}); }
  updateOrder(snapshot) { this.setState({order: snapshot.val()}); }
  
}

export default connect(s => s, mapDispatchToProps)(BallotPage);