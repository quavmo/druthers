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

const pageLabel = 'Docket';
class DocketPage extends Component {
  static propTypes = {
    deleteCandidate: func.isRequired,
    navigateToPage: func.isRequired,
    addCandidate: func.isRequired,
    fetchDocket: func.isRequired,
    currentDocket: func.isRequired,
    finalizeDocket: func.isRequired,
    updateTitle: func.isRequired,
    route: object.isRequired,
  };

  constructor(props) {
    super(props);
    if (props.route.params.docketID !== 'new') props.fetchDocket(props.route.params.docketID);
  }

  render() {
    const {
      updateTitle,
      addCandidate,
      finalizeDocket,
      currentDocket,
      navigateToPage,
    } = this.props;

    const {
      members,
      title,
      id: docketID,
    } = currentDocket;

    const deleteCandidate = !!docketID ? null : this.props.deleteCandidate;
    return el(Layout, { pageLabel, navigateToPage, docketID },
			el(Title, { value: title, updateTitle, autoFocus: true, isFinal: !!docketID }),
			el(CandidateSet, { members, deleteCandidate }),
      docketID ? null : el(NewMemberForm, { addCandidate }),
			el(DocketControls, { finalizeDocket, docket: currentDocket })
		);
  }
}

export default connect(s => s, mapDispatchToProps)(DocketPage);
