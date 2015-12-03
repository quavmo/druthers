import React from 'react';
import Hero from './Hero'

export default React.createClass({
	render: function() {
    console.log('rendering app root')
		return React.createElement('div', {}, React.createElement(Hero));
		// return [Hero, UseCaseList, SignUp]
	}

});
