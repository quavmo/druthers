import React, {
  createElement as el
} from 'react';
import { List, ListItem, Avatar } from 'material-ui';
import { sort } from 'ramda';
import { byOrder, elect, indexedMap } from '../../core/services/helpers';
import num from 'numeral'

const hydrateRunnerUp = ({name}, rank) => el(ListItem, {
  key: name, primaryText: name,
  leftAvatar: el(Avatar, {}, num(rank+1).format('Oo'))
});

const LeaderBoard = ({ballots, members}) => { 
  const sortedMembers = sort(byOrder(elect(ballots, members)), members);
  return el(List, {}, indexedMap(hydrateRunnerUp, sortedMembers));
}

export default LeaderBoard;