import { connect } from 'react-redux';
import * as mapDispatchToProps from '../../core/actions';
import React from 'react';
import { 
  Component,
  createElement as el,
  DOM
} from 'react';
const { a, button, div } = DOM;
import Title from '../../components/Title';
import CandidateSet from '../../components/CandidateSet';
import { ballot as className } from './style.css';
import {
  callToAction
} from '../styles.css';

class Ballot extends Component {
  constructor(props) {
    super(props);
    props.fetchDocket(props.route.params.docketID)
  }
  
  render() { 
    const { 
      moveCard,
      currentBallot,
      currentDocket
    } = this.props;
    const { title, members } = currentDocket;
    const { order } = currentBallot;
    console.log(currentDocket.id)
    const href = `/dockets/${currentDocket.id}/results`;
    const submitButton = button(
      {
        className: callToAction,
        onClick: this.onClick
      },
      "Submit Ballot"
    );
    return div({className},
      el(Title, {text: title}),
      el(CandidateSet, { members, order, moveCard }),
      currentBallot.id ? a({href}, "Results") : submitButton
    );
  }
  onClick = () => this.props.createBallot({
    order: this.props.currentBallot.order,
    docketID: this.props.currentDocket.id
  });
    
  updateTitle(snapshot) { this.setState({title: snapshot.val()}); }
  updateCandidates(snapshot) { this.setState({candidates: snapshot.val()}); }
  updateOrder(snapshot) { this.setState({order: snapshot.val()}); }
  
}

export default connect(s => s, mapDispatchToProps)(Ballot);