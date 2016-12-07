import { findDOMNode } from 'react-dom';

const cardTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    if (dragIndex === hoverIndex) { return; }
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    const overRatio = 0.9;
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) * overRatio;
    const clientOffset = monitor.getClientOffset();
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) { return; }
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) { return; }
    props.moveCandidate(dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex;
  }
};

export default cardTarget;