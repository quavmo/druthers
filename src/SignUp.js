import React from 'react';

export default React.createClass({
	render: function() {
		let inputProps = {
			type: 'text',
			style: {
				margin: '20px auto',
				width: '100%',
				display: 'block',
				padding: 15,
				background: 'black',
				color: 'white',
				border: 'none',
				fontSize: 15
			}
	};

		let header 		= React.DOM.h1({style: {textTransform: 'capitalize', fontSize: 42, marginTop: 45}}, "Get notified when it's released");
		let subheader = React.DOM.p({style: {marginTop: 20}}, "You'll be able to create a ballot immediately, and it will be the last day your group priorities are unclear.");
		let name 			= React.DOM.input(Object.assign(inputProps, {placeholder: "Name"}));
		let email 		= React.DOM.input(Object.assign(inputProps, {placeholder: "Email"}));
		let submit 		= React.DOM.button({style: {margin: '20px auto', display: 'block'}}, "Submit");

		let outerProps = {style: {padding: 20, color: 'white', background: 'rgba(0,84,255,1)', fontFamily: 'sans-serif'}}

		return React.DOM.div(
			outerProps,
			header,
			subheader,
			React.DOM.style({}, '::-webkit-input-placeholder { color: white }'),
			React.DOM.form({},
				name,
				email,
				submit
			)
		);
	}
});
