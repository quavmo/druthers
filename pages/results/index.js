import { pick } from 'ramda';
import { connect } from 'react-redux';
import { PropTypes, Component, DOM, createElement as el } from 'react';
const { h2, div } = DOM;
const { func, object } = PropTypes;
import * as mapDispatchToProps from '../../core/actions';
import LeaderBoard from '../../components/LeaderBoard';
import Layout from '../../components/Layout';
import { docketBase } from '../../core/services/DataService';
import num from 'numeral';
import { ballotCount } from './style.css';

const pageLabel = 'Results';
class ResultsPage extends Component {
  static propTypes = {
    docketFetchSucceeded: func,
    navigateToPage: func,
    currentDocket: object,
    route: object,
  };

  constructor(props) {
    super(props);
    docketBase.child(props.route.params.docketID).on('value', props.docketFetchSucceeded);
  }

  render() {
    const { navigateToPage, currentDocket } = this.props;
    const { id: docketID, ballots, members, title } = currentDocket;

    const countString = thing => {
      const count = Object.keys(thing).length;
      const humanCount = num(count).format('0,0');
      const noun = count === 1 ? 'ballot' : 'ballots';
      return `( ${humanCount} ${noun} )`;
    };

    document.title = title ? `Druthers: "${longestWord(title)}"` : "Druthers!";
    return el(Layout, { pageLabel, navigateToPage, docketID },
      h2({}, title),
      div({ className: ballotCount }, countString(ballots)),
      el(LeaderBoard, { members, ballots })
    );
  }
}

export default connect(pick(['currentDocket']), mapDispatchToProps)(ResultsPage);
