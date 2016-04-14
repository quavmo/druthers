import React from 'react';
import DataService from '../../DataService';


export default class UseCaseList extends React.Component {
	constructor() {
		super(...arguments);
		this.state = {cases: []};
		this.caseBase = DataService.child('marketing').child('cases');
	}

	componentDidMount() {
		this.caseBase.on('value', function (data) { this.setState({cases: data.val()}) }, this);
	}

	render() {
		let header 	= React.DOM.h2({style: {padding: 30, fontSize: 30}}, 'Get your druthers.');
		let responsiveStyleBox = React.DOM.style(
			{},
			`
				@media (max-width: 1000px) {
					#caseBox { display: block; }
					#useCaseList { padding: 20px; }
				}
				@media (min-width: 1000px) {
					#caseBox { display: flex; }
					#useCaseList { padding: 100px; }
				}
			`
		)
		let caseBox = React.DOM.div({id: 'caseBox'}, ...this.state.cases.map(this.hydrateCase))
		return React.DOM.div({id: 'useCaseList'}, responsiveStyleBox, header, caseBox);
	}

	hydrateCase(data) {
		let image = React.DOM.img({src: `image/${data.key}.svg`, style: {height: 120}});
		let title = React.DOM.h1({style: {color: 'red', marginTop: 30}}, data.title);
		let body 	= React.DOM.p({style: {marginTop: 20}}, data.body);

		return React.DOM.div(Object.assign(data, {style: {padding: 30}}), image, title, body);
	}
}
