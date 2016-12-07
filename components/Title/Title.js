import { createElement as el } from 'react';
import { TextField } from 'material-ui';

const Title = ({ value, updateTitle, isFinal }) => el(TextField, {
  name: 'docketTitle',
  floatingLabelText: 'Ask a Question',
  hintText: 'e.g. Where shall we go for lunch?',
  value,
  fullWidth: true,
  onChange: ({ target }) => updateTitle(target.value),
  disabled: isFinal,
});


export default Title;
