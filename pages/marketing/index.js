import React 				from 'react';
import Hero 				from './Hero';
import UseCaseList	from './UseCaseList';
import SignUp 			from './SignUp';

export default class Marketing extends React.Component {
	render() {
		let hero 				= React.createElement(Hero);
		let useCaseList = React.createElement(UseCaseList);
		let signUp 			= React.createElement(SignUp);

		return React.DOM.div(
			{style: {fontFamily: 'sans-serif'}},
			hero, useCaseList, signUp
		);
	}
}
