import React from 'react';
import { interestedBase } from '../../core/services/DataService';
import Gratitude from './Gratitude';
import FormStyle from './FormStyle';

let blue = 'rgba(0,84,255,1)';
export default class SignUp extends React.Component {
	constructor() {
		super(...arguments);
		this.state = {name: '', email: ''};
		this.inputProps = {
			type: 'text',
			style: FormStyle.input
		};
	}

	render() {
		let header 		= React.DOM.h1({style: {textTransform: 'capitalize', fontSize: 42}}, "Get notified when it's released");
		let gratitude = React.createElement(Gratitude, {name: this.state.name, feelingsBase: this.state.feelingsBase});
		let subheader = React.DOM.p({style: {marginTop: 20}}, "You'll be able to create a docket immediately, and it will be the last day your group priorities are unclear.");

		let name 			= React.DOM.input(Object.assign(this.inputProps, {
			placeholder: "Name",
			onChange: this.handleNameChange.bind(this),
			value: this.state.name
		}));
		let email 		= React.DOM.input(Object.assign(this.inputProps, {
			placeholder: "Email",
			onChange: this.handleEmailChange.bind(this),
			value: this.state.email
		}));
		let submit 		= React.DOM.button(
			{style: {cursor: 'pointer', border: '3px solid white', padding: 20, color: 'white', textTransform: 'capitalize', margin: '20px auto', display: 'block'}},
			"Submit"
		);

		let outerProps = {id: 'signUp', style: {color: 'white', background: blue, fontFamily: 'sans-serif'}}

		let responsiveStyleBox = React.DOM.style(
			{},
			`
				@media (max-width: 1000px) { #signUp { padding: 50px; } }
				@media (min-width: 1000px) { #signUp { padding: 130px; } }
				button { background: ${blue}; }
				button:hover { background: grey; }
			`
		)
	 let signupForm = React.DOM.form(
		 {onSubmit: this.handleSubmit.bind(this)},
		 name, email, submit
	 );
		return React.DOM.div(
			outerProps,
			responsiveStyleBox,
			header,
			subheader,
			React.DOM.style({}, '::-webkit-input-placeholder { color: white }'),
			this.state.submitted ? gratitude : signupForm
		);
	}

	handleNameChange(event) {
		event.preventDefault();
		this.setState({name: event.target.value});
 	}

	handleEmailChange(event) {
		event.preventDefault();
	 	this.setState({email: event.target.value});
 	}

	handleSubmit(event) {
		event.preventDefault();
		let user = interestedBase.push({name: this.state.name, email: this.state.email});
		this.setState({submitted: true, feelingsBase: user.child('feelings')});
 	}
}
