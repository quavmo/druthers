import {
  Paper,
  ListItem,
} from 'material-ui';
import DragHandleIcon from 'material-ui/svg-icons/editor/drag-handle';
import DeleteIcon from 'material-ui/svg-icons/action/delete';


import {
  createElement as el,
} from 'react';


const Candidate = ({ isDragging, deleteCandidate, text }) =>
el(Paper, { zDepth: isDragging ? 3 : 1, style: { margin: 4 } },
  el(ListItem, {
    disableTouchRipple: !deleteCandidate,
    primaryText: text,
    rightIcon: deleteCandidate ? el(DeleteIcon, { onClick: () => deleteCandidate(text) }) : null,
    leftIcon: !deleteCandidate ? el(DragHandleIcon, {}) : null,
  })
);

export default Candidate;
