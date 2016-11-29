import React, { DOM } from 'react';
const { textarea } = DOM;
import { titleField as className } from './style.css';

const Title = props => textarea({
  className,
	value: props.text,
	onChange: ({target}) => props.updateTitle(target.value)
});


export default Title;