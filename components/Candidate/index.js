import { createElement as el, DOM } from 'react';
const { div } = DOM;
import {
  Paper,
  ListItem,
} from 'material-ui';
import DragHandleIcon from 'material-ui/svg-icons/editor/drag-handle';
import DeleteIcon from 'material-ui/svg-icons/action/delete';


const rightIcon = (deleteCandidate, text) =>
  (deleteCandidate ? el(DeleteIcon, {
    onClick: () => deleteCandidate(text),
  }) : null);

const leftIcon = (deleteCandidate, connectDragSource) =>
  (!deleteCandidate ? connectDragSource(div({}, el(DragHandleIcon, {}))) : null);

const Candidate = ({
  connectDragSource, isDragging, deleteCandidate, text,
}) =>
el(Paper, { zDepth: isDragging ? 3 : 1, style: { margin: 4 } },
  el(ListItem, {
    disableTouchRipple: !deleteCandidate,
    primaryText: text,
    rightIcon: rightIcon(deleteCandidate, text),
    leftIcon: leftIcon(deleteCandidate, connectDragSource),
  })
);

export default Candidate;
