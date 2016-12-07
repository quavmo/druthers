import { connect } from 'react-redux'
import * as mapDispatchToProps from '../../core/actions';
import React, {
  Component,
  createElement as el,
  DOM
} from 'react';
const { div } = DOM;
import Title from '../../components/Title';
import Layout from '../../components/Layout';
import DocketControls from './DocketControls';
import CandidateSet from '../../components/CandidateSet';
import DataService from '../../core/services/DataService';
import NewMemberForm from './NewMemberForm';
import { curry } from 'ramda';


class DocketPage extends Component {
	render() {
    const { 
      updateTitle,
      addCandidate,
      finalizeDocket,
      currentDocket
    } = this.props;
    
    const {
      members,
      title,
      id
    } = currentDocket;
    
    return el(Layout, {},
			el(Title, { value: title, updateTitle, autoFocus: true }),
			el(CandidateSet, { members, deleteCandidate: this.props.deleteCandidate }),
      id ? null : el(NewMemberForm, { addCandidate }),
			el(DocketControls, { finalizeDocket, docket: currentDocket })
		);
  }
}

export default connect(s => s, mapDispatchToProps)(DocketPage)