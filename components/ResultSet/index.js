import React, {
  Component,
  createElement as el,
  DOM
} from 'react';
const { ol, li } = DOM;
import { sort, map } from 'ramda';
import { runnerUp, resultSet as className } from './style.css';
import { byOrder, elect } from '../../core/services/helpers';

const hydrateRunnerUp = ({name}) =>
  li({className: runnerUp, key: name}, name);

export default class ResultSet extends Component {
  render = () => { 
    const { ballots, members } = this.props;
    const sortedMembers = sort(byOrder(elect(ballots, members)), members);
    return ol({className}, map(hydrateRunnerUp, sortedMembers));
  }
}