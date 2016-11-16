import React from 'react';
import { Component, createElement, DOM } from 'react';
import Title from '../../components/Title';
import CandidateSet from '../../components/CandidateSet';
import DataService from '../../core/services/DataService';

class Ballot extends Component {
  constructor() { 
    super(...arguments); 
    this.state = {}; 
    this.updateTitle = this.updateTitle.bind(this)
    this.updateCandidates = this.updateCandidates.bind(this)
    this.updateOrder = this.updateOrder.bind(this)
  }
  
  render() { 
    let style = {
			background: 'rgb(60, 150, 130)',
			height: '100%',
			fontFamily: 'sans-serif',
			padding: 20
		};
    
    let title = createElement(Title, {text: this.state.title});
    
    let candidateSet = createElement(CandidateSet, {
				members: this.state.candidates,
        order: this.state.order,
        orderBase: this.ballotBase,
		});
    
    const resultsButton = DOM.a(
      {href: `#/dockets/${this.props.docketID}/results`}, 'Results'
    )
    return DOM.div({style}, title, candidateSet, resultsButton);
  }
  
  componentDidMount() {
    this.docketBase.child('title').on('value', this.updateTitle);
    this.docketBase.child('candidates').on('value', this.updateCandidates);
    this.docketBase.child('ballots').child(this.props.ballotID).on('value', this.updateOrder);
  }
  
  get ballotBase() { return this.docketBase.child('ballots').child(this.props.ballotID); }
  get docketBase() { return DataService.child('dockets').child(this.props.docketID); }
  
  updateTitle(snapshot) { this.setState({title: snapshot.val()}); }
  updateCandidates(snapshot) { this.setState({candidates: snapshot.val()}); }
  updateOrder(snapshot) { this.setState({order: snapshot.val()}); }
  
}

export default Ballot;