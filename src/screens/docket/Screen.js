import React 				from 'react';
import Title        from './Title';
import Finalize     from './Finalize';
import CandidateSet    from './CandidateSet';
import DataService from '../../DataService';

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

		let finalize = React.createElement(Finalize,
			{docketBase: docketBase, final: this.state.final}
		);

    let candidateSet = React.createElement(CandidateSet, {
				members: this.state.candidates,
				membersBase: docketBase.child('candidates')
		});

    return React.DOM.div(
			{style},
			title,
			candidateSet,
			finalize
		);
  }

	componentDidMount() {
		DataService.on('value', this.setStateIfData, this);
	}

	setStateIfData(data) {
		data.val() && this.setState(data.val().dockets[this.props.id]);
	}
}
