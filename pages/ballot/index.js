import { connect } from 'react-redux';
import * as mapDispatchToProps from '../../core/actions';
import React from 'react';
import { Component, createElement as el, DOM } from 'react';
const { a, div } = DOM;
import Title from '../../components/Title';
import CandidateSet from '../../components/CandidateSet';
import { ballot as className } from './style.css';

class Ballot extends Component {
  constructor(props) {
    super(props);
    props.fetchDocket(props.route.params.docketID)
  }
  render() { 
    const { title, members } = this.props.currentDocket;
    const { order } = this.props.currentBallot;
    const href = `#/dockets/${this.props.docketID}/results`;
    const { moveCard } = this.props;
    
     return div({className},
      el(Title, {text: title}),
      el(CandidateSet, { members, order, moveCard }),
      a( {href}, 'Results' )
    );
  }
    
  updateTitle(snapshot) { this.setState({title: snapshot.val()}); }
  updateCandidates(snapshot) { this.setState({candidates: snapshot.val()}); }
  updateOrder(snapshot) { this.setState({order: snapshot.val()}); }
  
}

export default connect(s => s, mapDispatchToProps)(Ballot);