import React from 'react';
import FormStyle from './FormStyle';

export default class Gratitude extends React.Component {
	constructor(){
		super(...arguments);
		this.state = {feeling: 'I hope...'};
		this.buttonStyle = {
			cursor: 'pointer',
			border: '3px solid white',
			padding: 20,
			color: 'white',
			textTransform: 'capitalize',
			margin: '20px auto',
			display: 'block'
		};
	}

	render() {
    let message = `Cool, ${this.props.name}!  And how do you feel about all this?`;
		let feelingsWiring = {placeholder: "I hope...", onChange: this.handleFeelingChange.bind(this), ref: 'input', value: this.state.latestFeeling};
    let feelingsBox = React.DOM.input(Object.assign({style: FormStyle.input}, feelingsWiring));
		let submit = React.DOM.button({style: this.buttonStyle, ref: 'submit'}, "Tell us!");
		let form = React.DOM.form({onSubmit: this.handleSubmit.bind(this)}, feelingsBox, submit);
		return React.DOM.div({style:{marginTop: 20}}, React.DOM.p({}, message), form);
  }

	handleSubmit(event){
		event.preventDefault();
		event.stopPropagation();
		this.props.feelingsBase.push(this.state.latestFeeling);
		this.setState({latestFeeling: 'I also hope...'})
	}

	handleFeelingChange(event) {
		this.setState({latestFeeling: event.target.value})
	}
}
