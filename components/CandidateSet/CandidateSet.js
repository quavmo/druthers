import React, { Component, createElement as el, DOM } from 'react';
const { div } = DOM;
import { newOrder, candidateSort, keyedObjArray } from '../../core/services/ballot';
import { identity, sort } from 'ramda';
import update from 'react/lib/update';
import Card from '../Card';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { default as TouchBackend } from 'react-dnd-touch-backend';
import { candidateSet as className } from './style.css';

const byOrder = (order=[]) => (a, b) => order.indexOf(a.name) - order.indexOf(b.name);

@DragDropContext(TouchBackend)
export default class CandidateSet extends Component {
  render = () => { 
    const sortedMembers = sort(byOrder(this.props.order), this.props.members);
    return div(
      {className},
      sortedMembers.map(this.hydrateCard)
    );
  }
  
  
  hydrateCard = ({name}, index) => el(Card, {
    key: name + index,
    index,
    id: name,
    text: name,
    moveCard: this.props.moveCard || identity
  });
}