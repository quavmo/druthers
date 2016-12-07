import {
  Paper,
  ListItem,
  TextField
} from 'material-ui';
import DragHandleIcon from 'material-ui/svg-icons/editor/drag-handle'
import DeleteIcon from 'material-ui/svg-icons/action/delete'


import {
  createElement as el 
} from 'react';


const Candidate = ({isDragging, deleteCard, text}) =>
el(Paper, {zDepth: isDragging ? 3 : 1, style: {margin: 4}},
  el(ListItem, { 
    disableTouchRipple: !deleteCard,
    primaryText: text,
    rightIcon: deleteCard ? el(DeleteIcon, {onClick: () => deleteCard(text)}) : null,
    leftIcon: !deleteCard ? el(DragHandleIcon, {}) : null
  })
);

export default Candidate;