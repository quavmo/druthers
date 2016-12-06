import React, {
  Component,
  PropTypes,
  DOM,
  createElement as el
} from 'react';
const { div } = DOM;
import { ListItem, Paper } from 'material-ui';
import DragHandleIcon from 'material-ui/svg-icons/editor/drag-handle'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import { findDOMNode } from 'react-dom';
import ItemTypes from './ItemTypes';
import { DragSource, DropTarget } from 'react-dnd';
import { card as className } from './style.css';

const cardSource = {
  beginDrag({ id, index }) {
    return { id, index };
  }
};

const cardTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    if (dragIndex === hoverIndex) { return; }
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    const clientOffset = monitor.getClientOffset();
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) { return; }
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) { return; }
    props.moveCard(dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex;
  }
};

@DropTarget(ItemTypes.CARD, cardTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))
@DragSource(ItemTypes.CARD, cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
export default class Card extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isDragging: PropTypes.bool.isRequired,
    id: PropTypes.any.isRequired,
    text: PropTypes.string.isRequired,
    moveCard: PropTypes.func.isRequired
  };

  render() {
    const {
      text,
      isDragging,
      connectDragSource,
      connectDropTarget,
      deleteCard
    } = this.props;
    
    const rightIcon = !deleteCard ? null : el(DeleteIcon, {onClick: () => deleteCard(text)});
    const leftIcon = deleteCard ? null : el(DragHandleIcon, {});
    return connectDragSource(connectDropTarget(
      div({}, el(Paper, {zDepth: 1, style: {margin: 4}}, el(ListItem, { disableTouchRipple:true, primaryText: text, rightIcon, leftIcon })))
    ));
  }
}