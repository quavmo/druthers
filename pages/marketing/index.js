import React, { 
  Component, DOM,
  createElement as el
} from 'react';
import Hero 				from './Hero';
import UseCaseList	from './UseCaseList';
import SignUp 			from './SignUp';

export default class Marketing extends Component {
	render() {
		let hero 				= el(Hero);
		let useCaseList = el(UseCaseList);
		let signUp 			= el(SignUp);

		return DOM.div(
			{style: {fontFamily: 'sans-serif'}},
			hero, useCaseList, signUp
		);
	}
}
