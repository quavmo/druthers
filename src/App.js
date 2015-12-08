import React from 'react';
import Hero from './Hero';
import UseCaseList from './UseCaseList';

export default React.createClass({
	render: function() {

		let hero 				= React.createElement(Hero, {key: 'hero'});
		let useCaseList = React.createElement(UseCaseList, {key: 'cases'});

		return React.createElement('div', {}, [hero, useCaseList]);
		// return [Hero, UseCaseList, SignUp]
	}
});
