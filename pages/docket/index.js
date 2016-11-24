import { curry } from 'ramda';
import { connect } from 'react-redux'
import React, { Component, createElement, DOM } from 'react';
import Title from '../../components/Title';
import AbstractScreen from '../../components/AbstractScreen';
import Finalize from './Finalize';
import CandidateSet from '../../components/CandidateSet';
import DataService from '../../core/services/DataService';
import NewMemberForm from './NewMemberForm';
import * as mapDispatchToProps from '../../core/actions';
import { docket as className } from '../styles.css';
const el = createElement;
const { div } = DOM;

class Docket extends Component {
	render() {
    const { 
      updateTitle,
      addMember,
      finalizeDocket,
      currentDocket
    } = this.props;
    
    const {
      members,
      title,
      id
    } = currentDocket;
    
    return div({className},
			el(Title, { text: title, updateTitle }),
			el(CandidateSet, { members }),
      id ? null : el(NewMemberForm, { addMember }),
			el(Finalize, { 
        finalizeDocket,
        docket: currentDocket 
      })
		);
  }
}

export default connect(s => s, mapDispatchToProps)(Docket)