import React, { createElement as el } from 'react';
import { titleField as className } from './style.css';
import { TextField } from 'material-ui';

const Title = ({value, updateTitle}) => el(TextField, {
  name: 'docketTitle',
  floatingLabelText: 'Ask a Question',
  hintText: 'e.g. Where shall we go for lunch?',
	value,
  fullWidth: true,
	onChange: ({target}) => updateTitle(target.value)
});


export default Title;