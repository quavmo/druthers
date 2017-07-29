import { Component, createElement as el, DOM } from 'react';
import { identity, sort } from 'ramda';
import { indexedMap, byOrder } from '../../core//helpers';
import Card from '../Card';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { default as TouchBackend } from 'react-dnd-touch-backend';

const { div } = DOM;

@DragDropContext('ontouchstart' in document.documentElement ? TouchBackend : HTML5Backend)
export default class CandidateSet extends Component {
  hydrateCard = ({ name }, index) => el(Card, {
    key: name + index,
    index,
    id: name,
    text: name,
    moveCandidate: this.props.moveCandidate || identity,
    deleteCandidate: this.props.deleteCandidate,
  });

  render = () => div({},
    indexedMap(this.hydrateCard, sort(byOrder(this.props.order), this.props.members)),
  );
}
