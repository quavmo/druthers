import React, {
  Component,
  PropTypes,
  DOM,
  createElement as el
} from 'react';
const { div } = DOM;
import ItemTypes from './ItemTypes';
import { DragSource, DropTarget } from 'react-dnd';
import cardTarget from './cardTarget';
import cardSource from './cardSource';
import Candidate from '../Candidate';

@DropTarget(ItemTypes.CARD, cardTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))
@DragSource(ItemTypes.CARD, cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
export default class Card extends Component {
  render() {
    const {
      text,
      isDragging,
      connectDragSource,
      connectDropTarget,
      deleteCandidate
    } = this.props;
    
    return connectDragSource(connectDropTarget(
      div({}, el(Candidate, {isDragging, deleteCandidate, text}))
    ));
  }
}