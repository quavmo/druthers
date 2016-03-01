import React from 'react';
import Firebase from 'firebase';
import Gratitude from './Gratitude';
import FormStyle from './FormStyle';

let interestedBase = new Firebase("https://druthers-base.firebaseio.com/interested");
let blue = 'rgba(0,84,255,1)';

export default React.createClass({
	getInitialState: function() { return {name: '', email: ''}; },
	render: function() {
		let header 		= React.DOM.h1({style: {textTransform: 'capitalize', fontSize: 42}}, "Get notified when it's released");
		let gratitude = React.createElement(Gratitude, {feelingsBase: this.state.feelingsBase});
		let subheader = React.DOM.p({style: {marginTop: 20}}, "You'll be able to create a ballot immediately, and it will be the last day your group priorities are unclear.");

		let name 			= React.DOM.input(Object.assign(this.inputProps, {placeholder: "Name", onChange: this.handleNameChange, value: this.state.name}));
		let email 		= React.DOM.input(Object.assign(this.inputProps, {placeholder: "Email", onChange: this.handleEmailChange, value: this.state.email}));
		let submit 		= React.DOM.button({style: {cursor: 'pointer', border: '3px solid white', padding: 20, color: 'white', textTransform: 'capitalize', margin: '20px auto', display: 'block'}}, "Submit");

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

		return React.DOM.div(
			outerProps,
			responsiveStyleBox,
			header,
			subheader,
			React.DOM.style({}, '::-webkit-input-placeholder { color: white }'),
			!this.state.submitted ? React.DOM.form({onSubmit: this.handleSubmit},
				name,
				email,
				submit
			) : gratitude
		);
	},
	handleNameChange: function (e) {
		e.preventDefault();
		this.setState({name: e.target.value});
 	},
	handleEmailChange: function (e) {
		e.preventDefault();
	 	this.setState({email: e.target.value});
 	},
	handleSubmit: function (e) {
		e.preventDefault();
		let user = interestedBase.push({name: this.state.name, email: this.state.email});
		this.setState({submitted: true, feelingsBase: user.child('feelings')});
 	},
	inputProps: {
		type: 'text',
		style: FormStyle.input
	}
});
