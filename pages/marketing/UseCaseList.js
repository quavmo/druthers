import React, { DOM } from 'react';
const {
  h2, h3, style, div, img, h1, p
} = DOM;
import Firebase from 'firebase';
let caseBase = new Firebase("https://druthers-base.firebaseio.com/marketing/cases");

import s from './styles.css';

export default class UseCaseList extends React.Component {
	constructor() {
		super(...arguments);
		this.state = {cases: []};
	}

	componentDidMount() {
		caseBase.on('value', function (data) { this.setState({cases: data.val()}) }, this);
	}

	render() {
		let header 	= h2({}, 'Get your druthers.');
		let responsiveStyleBox = style(
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
		let caseBox = div({id: 'caseBox'}, ...this.state.cases.map(this.hydrateCase))
		return div({id: 'useCaseList'}, responsiveStyleBox, header, caseBox);
	}

	hydrateCase(data) {
		let image = img({className: s.caseIcon, src: `icons/${data.key}.svg`});
		let title = h3({}, data.title);
		let body 	= p({}, data.body);

		return div(Object.assign(data, {className: s.useCase}), image, title, body);
	}
}
