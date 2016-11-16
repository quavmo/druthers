import React, { DOM } from 'react';
const { textarea } = DOM;
import s from '../styles.css';
import classNames from 'classnames';

export default class Title extends React.Component {
	render = () => textarea({
		ref: 'input',
    className: s.titleField,
		value: this.props.text,
		onChange: this.updateText
	});

  updateText = ({target}) => this.props.updateTitle(target.value);
}
