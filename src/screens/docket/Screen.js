import React 				from 'react';
import Title        from './Title';
import CandidateSet    from './CandidateSet';
import DataService from '../../DataService';

let Submit = React.DOM.div({}, ">");

export default class Candidate extends React.Component {
	constructor() {
		super(...arguments);
		this.state = {candidates:[]};
	}

	render() {
		let style = {
			background: 'rgb(60, 150, 130)',
			height: '100%',
			fontFamily: 'sans-serif',
			padding: 20
		};
		let docketBase = DataService.child(`dockets/${this.props.id}`);

		let title = React.createElement(Title,
			{text: this.state.title, titleRef: docketBase.child('title')}
		);

    let candidateSet = React.createElement(CandidateSet, {
				members: this.state.candidates,
				membersBase: docketBase.child('candidates')
		});

    return React.DOM.div(
			{style},
			title,
			candidateSet,
			Submit
		);
  }

	componentDidMount() {
		DataService.on('value', this.setStateIfData, this);
	}

	setStateIfData(data) {
		data.val() && this.setState(data.val().dockets[this.props.id]);
	}
}
