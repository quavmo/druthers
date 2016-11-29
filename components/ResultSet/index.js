import React, {
  Component,
  createElement as el,
  DOM
} from 'react';
import { List, ListItem, Avatar } from 'material-ui';
const { ol, li } = DOM;
import { sort, map } from 'ramda';
import { byOrder, elect, indexedMap } from '../../core/services/helpers';
import num from 'numeral'

const hydrateRunnerUp = ({name}, rank) => el(ListItem, {
  key: name, primaryText: name,
  leftAvatar: el(Avatar, {}, num(rank+1).format('Oo'))
});

export default class ResultSet extends Component {
  render = () => { 
    const { ballots, members } = this.props;
    const sortedMembers = sort(byOrder(elect(ballots, members)), members);
    return el(List, {}, indexedMap(hydrateRunnerUp, sortedMembers));
  }
}