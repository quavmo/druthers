import React, { Component, createElement as el, DOM } from 'react';
const { div } = DOM;
import { identity, sort } from 'ramda';
import { indexedMap } from '../../core/services/helpers';
import update from 'react/lib/update';
import Card from '../Card';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { default as TouchBackend } from 'react-dnd-touch-backend';
import { candidateSet as className } from './style.css';
import { 
  byOrder
} from '../../core/services/helpers';

const mobile = 'ontouchstart' in document.documentElement;

@DragDropContext(mobile ? TouchBackend : HTML5Backend)
export default class CandidateSet extends Component {
  render = () => div({},
    indexedMap(
      this.hydrateCard,
      sort(byOrder(this.props.order), this.props.members)
    )
  );
  
  
  hydrateCard = ({name}, index) => el(Card, {
    key: name + index,
    index,
    id: name,
    text: name,
    moveCandidate: this.props.moveCandidate || identity,
    deleteCandidate: this.props.deleteCandidate
  });
}