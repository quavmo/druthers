import React, {
  Component,
  createElement as el,
  DOM
} from 'react';
const { ol, li } = DOM;
import { sort } from 'ramda';
import { runnerUp, resultSet as className } from './style.css';
import { byOrder } from '../../core/services/helpers';

const hydrateRunnerUp = ({name}) =>
  li({className: runnerUp}, name);

export default class CandidateSet extends Component {
  render = () => { 
    const sortedMembers = sort(byOrder(this.props.order), this.props.members);
    return ol({className}, sortedMembers.map(hydrateRunnerUp));
  }
}