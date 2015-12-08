import React from 'react';
import Hero from './Hero';
import UseCaseList from './UseCaseList';

export default React.createClass({
	render: function() {

		let hero 				= React.createElement(Hero, {key: 'hero'});
		let useCaseList = React.createElement(UseCaseList, {key: 'cases'});

		return React.DOM.div({style: {fontFamily: 'sans-serif'}}, [hero, useCaseList]);
		// return [Hero, UseCaseList, SignUp]
	}
});
