import {
  PropTypes, Component, createElement as el, DOM,
} from 'react';
const { div } = DOM;
const { func, array } = PropTypes;
import { identity, sort } from 'ramda';
import { indexedMap, byOrder } from '../../core//helpers';
import Card from '../Card';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { default as TouchBackend } from 'react-dnd-touch-backend';

const mobile = 'ontouchstart' in document.documentElement;
@DragDropContext(mobile ? TouchBackend : HTML5Backend)
export default class CandidateSet extends Component {
  static propTypes = {
    moveCandidate: func,
    deleteCandidate: func,
    order: array,
    members: array,
  };

  hydrateCard = ({ name }, index) => el(Card, {
    key: name + index,
    index,
    id: name,
    text: name,
    moveCandidate: this.props.moveCandidate || identity,
    deleteCandidate: this.props.deleteCandidate,
  });

  render = () => div({},
    indexedMap(
      this.hydrateCard,
      sort(byOrder(this.props.order), this.props.members)
    )
  );
}
