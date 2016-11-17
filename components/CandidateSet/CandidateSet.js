import React, { Component, createElement as el, DOM } from 'react';
const { div } = DOM;
import { newOrder, candidateSort, keyedObjArray } from '../../core/services/ballot';
import { sort } from 'ramda';
import update from 'react/lib/update';
import Card from '../Card';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { candidateSet as className } from './style.css';

const random = (a, b) => Math.random() < 0.5 ? -1 : 1;
const thisOrder = order => random

@DragDropContext(HTML5Backend)
export default class CandidateSet extends Component {
  render() {
    const sortedMembers = sort(thisOrder(this.props.order), this.props.members)
    return div({className}, sortedMembers.map(this.hydrateCard));
  }
  
  hydrateCard = ({name}, index) => el(Card, {
    key: name,
    index,
    id: name,
    text: name,
    moveCard: this.props.moveCard
  });
}