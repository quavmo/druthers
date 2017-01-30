import { connect } from 'react-redux';
import * as mapDispatchToProps from '../../core/actions';
import {
  PropTypes,
  Component,
  createElement as el,
} from 'react';
const { func, object } = PropTypes;
import Title from '../../components/Title';
import Layout from '../../components/Layout';
import DocketControls from './DocketControls';
import CandidateSet from '../../components/CandidateSet';
import NewMemberForm from './NewMemberForm';
import { longestWord } from '../../core//helpers';

const pageLabel = 'Docket';
class DocketPage extends Component {
  static propTypes = {
    deleteCandidate: func.isRequired,
    navigateToPage: func.isRequired,
    addCandidate: func.isRequired,
    fetchDocket: func.isRequired,
    currentDocket: object.isRequired,
    finalizeDocket: func.isRequired,
    updateTitle: func.isRequired,
    flagUrlCopied: func.isRequired,
    gui: object.isRequired,
    route: object.isRequired,
  };

  constructor(props) {
    super(props);
    const { docketID } = props.route.params;
  
    if (docketID !== 'new') props.fetchDocket(docketID);
  }

  render() {
    const {
      updateTitle,
      addCandidate,
      flagUrlCopied,
      finalizeDocket,
      currentDocket:docket,
      navigateToPage,
    } = this.props;

    const {
      members,
      title,
      id:docketID,
    } = this.props.currentDocket;

    const {
      urlCopied
    } = this.props.gui;
    
    document.title = `${title} • http://druthe.rs` || "http://druthe.rs";
    const deleteCandidate = !!docketID ? null : this.props.deleteCandidate;
    return el(Layout, { pageLabel, navigateToPage, docketID },
			el(Title, { value: title, updateTitle, isFinal: !!docketID }),
			el(CandidateSet, { members, deleteCandidate }),
      docketID ? null : el(NewMemberForm, { addCandidate }),
			el(DocketControls, { flagUrlCopied, finalizeDocket, docket, urlCopied })
		);
  }
}

export default connect(s => s, mapDispatchToProps)(DocketPage);
