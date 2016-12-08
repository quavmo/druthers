import { connect } from 'react-redux';
import * as mapDispatchToProps from '../../core/actions';
import {
  Component,
  PropTypes,
  createElement as el,
  DOM,
} from 'react';
const { h2 } = DOM;
const { func, object } = PropTypes;
import Layout from '../../components/Layout';
import CandidateSet from '../../components/CandidateSet';
import BallotControls from '../../components/BallotControls';
import { ballot as className } from './style.css';

const pageLabel = 'Ballot';
class BallotPage extends Component {
  static propTypes = {
    fetchDocket: func.isRequired,
    fetchBallot: func.isRequired,
    navigateToPage: func.isRequired,
    moveCandidate: func.isRequired,
    createBallot: func.isRequired,
    currentDocket: object.isRequired,
    currentBallot: object.isRequired,
    route: object.isRequired,
  }
  constructor(props) {
    super(props);
    const { docketID, ballotID } = props.route.params;

    props.fetchDocket(docketID);
    if (ballotID !== 'new') props.fetchBallot({docketID, ballotID});
  }

  updateTitle(snapshot) { this.setState({ title: snapshot.val() }); }
  updateCandidates(snapshot) { this.setState({ candidates: snapshot.val() }); }
  updateOrder(snapshot) { this.setState({ order: snapshot.val() }); }

  render() {
    const {
      moveCandidate,
      currentBallot,
      currentDocket,
      createBallot,
      navigateToPage,
    } = this.props;

    const { id: docketID, title, members } = currentDocket;
    const { id: ballotID, order, submitting } = currentBallot;

    return el(Layout, { className, pageLabel, navigateToPage, docketID },
      h2({}, title),
      el(CandidateSet, { members, order, moveCandidate }),
      el(BallotControls, { ballotID, docketID, createBallot, order, submitting })
    );
  }
}

export default connect(s => s, mapDispatchToProps)(BallotPage);
